from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

from core.enums import UserRole, PaymentMethod, PaymentStatus


# export type Category = {
#   id: number;
#   name: string;
# };
class Category(models.Model):
    name = models.TextField(blank=True, default='', verbose_name='name')

    def __str__(self):
        return f"#{self.id}: {self.name}"

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"
# export type Ingredient = {
#   id: number;
#   name: string;
# };


class Ingredient(models.Model):
    name = models.TextField(blank=True, default='', verbose_name='name')

    def __str__(self):
        return f"#{self.id}: {self.name}"

    class Meta:
        verbose_name = "Ингредиент"
        verbose_name_plural = "Ингредиенты"
# export type Restaurant = {
#   id: number;
#   name: string;
#   description: string;
#   category: Category[];
#   image: string;
#   ordersCount: number;
#   meals: Meal[];
#   location: string;
#   address: string;
# };


class Restaurant(models.Model):
    name = models.TextField(blank=True, default='', verbose_name='name')
    description = models.TextField(
        blank=True, default='', verbose_name='description')
    image = models.TextField(blank=True, default='', verbose_name='image')
    address = models.TextField(blank=True, default='', verbose_name='address')
    categories = models.ManyToManyField(Category, verbose_name='category')

    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='created_at')
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name='updated_at')

    @property
    def orders_count(self):

        orders_count = 1231
        return orders_count

    def __str__(self):
        return f"#{self.id}: {self.name}"

    class Meta:
        verbose_name = "Ресторан"
        verbose_name_plural = "Рестораны"
        ordering = ["-id"]

# export type Meal = {
#   id: number;
#   name: string;
#   description: string;
#   ingredients: Ingredient[];
#   image: string;
#   price: number;
#   category: Category[];
# };


class Meal(models.Model):
    name = models.TextField(blank=True, default='', verbose_name='name')
    description = models.TextField(
        blank=True, default='', verbose_name='description')
    ingredients = models.ManyToManyField(Ingredient)
    image = models.TextField(blank=True, default='', verbose_name='image')
    price = models.IntegerField(verbose_name='price')
    categories = models.ManyToManyField(Category, verbose_name='category')
    restaurant = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE, related_name="meals", related_query_name="meal")

    def __str__(self):
        return f"#{self.id}: {self.name}"

    class Meta:
        verbose_name = "Блюдо"
        verbose_name_plural = "Блюда"

# export type Client = {
#   id: number;
#   email: string;
#   fullName: string;
#   phone: string;
#   rewardPoints: number;
#   restarauntId?: number;
# };


class Client(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=256, default="", blank=True)
    reward_points = models.IntegerField(default=0)
    restaurant = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE, null=True, blank=True)

    def get_full_name(self):
        return f"{self.user.first_name} {self.user.last_name}"

    def __str__(self):
        return f"#{self.id}: {self.get_full_name()}"

# export type Order = {
#   id: number;
#   client: Client;
#   products: {
#     quantity: number;
#     mealId: number;
#     notes: string[];
#   }[];
# };


class Order(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    is_delivery = models.BooleanField(default=True, verbose_name='is_delivery')
    is_present = models.BooleanField(default=True, verbose_name='is_delivery')
    to_whom = models.ForeignKey(
        Client, on_delete=models.CASCADE, null=True, blank=True, related_name="present_senders", related_query_name="present_sender")
    address = models.TextField(blank=True, default='', verbose_name='address')
    note = models.TextField(blank=True, default='', verbose_name='address')
    payment_method = models.CharField(max_length=128, choices=PaymentMethod.choices(
    ),  default=PaymentMethod.ONLINE.value, verbose_name='payment_method')
    payment_status = models.CharField(max_length=128, choices=PaymentStatus.choices(
    ),  default=PaymentStatus.PENDING.value, verbose_name='payment_method')
    delivery_time = models.CharField(
        max_length=512, null=True, verbose_name='delivery_time')

    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='created_at')
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name='updated_at')

    def __str__(self):
        return f"#{self.id}: {self.client.get_full_name()} {self.address}"


class OrderMeal(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name="meals", related_query_name="meal")
    quantity = models.IntegerField(verbose_name='quantity')
    meal = models.ForeignKey(
        Meal, on_delete=models.CASCADE, related_name="order_meals", related_query_name="order_meal")
    notes = ArrayField(models.CharField(
        max_length=1024), blank=True, default=[])

    def __str__(self):
        return f"#{self.id}: {self.meal.name}"
