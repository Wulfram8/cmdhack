from django.contrib.auth.models import Group, User
from rest_framework import serializers

from core.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name']


class MealSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)
    categories = CategorySerializer(many=True)

    class Meta:
        model = Meal
        fields = '__all__'


class RestaurantSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)
    meals = MealSerializer(many=True)

    class Meta:
        model = Restaurant
        fields = '__all__'


class RestaurantUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'image', 'address']


class ClientSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    restaurant = RestaurantUserSerializer()

    class Meta:
        model = Client
        fields = '__all__'


class OrderMealSerializer(serializers.ModelSerializer):
    meal = MealSerializer()

    class Meta:
        model = OrderMeal
        fields = ['quantity', 'meal', 'notes']


class OrderSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    to_whom = ClientSerializer()
    meals = OrderMealSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'
