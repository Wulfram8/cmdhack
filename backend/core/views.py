import django_filters
import json

from django.contrib.auth.models import User
from django.db import models

from rest_framework import permissions, viewsets
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from django_filters.rest_framework import DjangoFilterBackend

from drf_yasg.utils import swagger_auto_schema

from core.serializers import *
from core.filters import CategoriesFilter, IngredientsFilter, ClientFilter


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        client = Client.objects.filter(user=user).first()
        if not client:
            Client.objects.create(user=user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'client': ClientSerializer(client).data,
        })


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    class Meta:
        path = 'users'


class ClientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Clients to be viewed or edited.
    """
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [permissions.IsAuthenticated]

    class Meta:
        path = 'Clients'


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [permissions.IsAuthenticated]

    class Meta:
        path = 'categories'


class IngredientViewSet(viewsets.ModelViewSet):

    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

    class Meta:
        path = 'categories'


class ProductsSerializer(serializers.Serializer):
    meal_id = serializers.IntegerField()
    quantity = serializers.IntegerField()
    notes = serializers.ListField(child=serializers.CharField())


class OrderViewSet(viewsets.ModelViewSet):

    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    filter_backends = [DjangoFilterBackend]
    filter_class = ClientFilter
    filterset_fields = ['client_id']

    class OrderRequestSerializer(serializers.Serializer):
        client_id = serializers.IntegerField()
        to_whom_id = serializers.IntegerField(required=False)
        is_delivery = serializers.BooleanField()
        is_present = serializers.BooleanField()
        address = serializers.CharField()
        note = serializers.CharField()
        payment_method = serializers.CharField()
        payment_status = serializers.CharField()
        delivery_time = serializers.DateTimeField()
        products = ProductsSerializer(many=True)

    @swagger_auto_schema(responses={200: OrderSerializer}, request_body=OrderRequestSerializer)
    def create(self, request):
        data = json.loads(request.body)
        client_id = data.get('client_id')
        to_whom_id = data.get('to_whom_id')
        is_delivery = data.get('is_delivery')
        is_present = data.get('is_present')
        address = data.get('address')
        note = data.get('note')
        payment_method = data.get('payment_method')
        payment_status = data.get('payment_status')
        delivery_time = data.get('delivery_time')
        products = data.get('products')

        client = Client.objects.get(id=client_id)
        if to_whom_id:
            to_whom = Client.objects.filter(id=to_whom_id).first()

        order = Order.objects.create(
            client=client,
            to_whom=to_whom,
            is_delivery=is_delivery,
            is_present=is_present,
            address=address,
            payment_method=payment_method,
            payment_status=payment_status,
            delivery_time=delivery_time,
            note=note,
        )

        for p in products:
            meal = Meal.objects.get(id=p.get('meal_id'))
            OrderMeal.objects.create(
                order=order, quantity=p.get('quantity'), meal=meal, notes=p.get('notes'))

        return Response(OrderSerializer(order).data)

    class Meta:
        path = 'orders'


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    filter_backends = [DjangoFilterBackend]
    filter_class = CategoriesFilter
    filterset_fields = ['categories']

    class Meta:
        path = 'restaurants'


class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer
    filter_backends = [DjangoFilterBackend]
    filter_class = [CategoriesFilter, IngredientsFilter]
    filterset_fields = ['ingredients', 'categories']

    class Meta:
        path = 'meals'


class UserRegisterViewSet(viewsets.ViewSet):

    class Response(serializers.Serializer):
        token = serializers.CharField()
        user = UserSerializer()

    class Request(serializers.Serializer):
        username = serializers.CharField()
        first_name = serializers.CharField()
        last_name = serializers.CharField()
        password = serializers.CharField()

    @swagger_auto_schema(responses={200: Response}, request_body=Request)
    def create(self, request):
        data = json.loads(request.body)
        username = data.get('username')
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        password = data.get('password')

        # return Response(username)

        user = User.objects.create(
            username=username,
            first_name=first_name,
            last_name=last_name,
            password=password,
        )
        client = Client.objects.create(user=user)
        token, created = Token.objects.get_or_create(user=user)

        return Response({
            "token": token.key,
            "client": ClientSerializer(client).data,
        })
