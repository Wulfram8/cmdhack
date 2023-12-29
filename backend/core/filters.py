import django_filters
from core.models import Category, Ingredient, Client


class NumberInFilter(django_filters.BaseInFilter, django_filters.NumberFilter):
    pass


class CategoriesFilter(django_filters.FilterSet):
    categories = NumberInFilter(field_name='id', lookup_expr='in')

    class Meta:
        model = Category
        fields = ['id']


class IngredientsFilter(django_filters.FilterSet):
    ingredients = NumberInFilter(field_name='id', lookup_expr='in')

    class Meta:
        model = Ingredient
        fields = ['id']


class ClientFilter(django_filters.FilterSet):
    client_id = NumberInFilter(field_name='id', lookup_expr='in')

    class Meta:
        model = Client
        fields = ['id']
