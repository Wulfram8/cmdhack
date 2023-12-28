import {Category, Client, Ingredient, Meal, Order, Restaurant} from '@root/dto'
const restaurantImg = 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg'
// Mock data for Ingredient
// Mock data for Ingredient
export const mockIngredients: Ingredient[] = [
  { id: 1, name: "Помидор" },
  { id: 2, name: "Базилик" },
  { id: 3, name: "Моцарелла" },
  { id: 4, name: "Оливковое масло" },
  { id: 5, name: "Соль" },
  { id: 6, name: "Чеснок" },
  { id: 7, name: "Лук" },
  { id: 8, name: "Перец" },
  { id: 9, name: "Курица" },
  { id: 10, name: "Говядина" },
  { id: 11, name: "Свинина" },
  { id: 12, name: "Укроп" },
  // ... другие ингредиенты
];

// Mock data for Category
export const mockCategories: Category[] = [
  { id: 1, name: "Итальянская" },
  { id: 2, name: "Мексиканская" },
  { id: 3, name: "Японская" },
  { id: 4, name: "Китайская" },
  { id: 5, name: "Русская" },
  { id: 6, name: "Французская" },
  { id: 7, name: "Американская" },
  { id: 8, name: "Индийская" },
  { id: 9, name: "Тайская" },
  { id: 10, name: "Греческая" },
  { id: 11, name: "Испанская" },
  { id: 12, name: "Морская" },
  // ... другие категории
];

// Mock data for Meal
export const mockMeals: Meal[] = [
  // ... Предположим, что у вас есть 12 разных блюд
  // Например, первое блюдо
  {
    id: 1,
    name: "Пицца Маргарита",
    description: "Классическая Маргарита с моцареллой и свежим базиликом",
    ingredients: mockIngredients.slice(0, 5), // Используем часть ингредиентов
    image: "path/to/pizza.jpg",
    price: 15.99,
    category: mockCategories.slice(0, 2), // Принадлежит к нескольким категориям
  },
  // ... Другие блюда
];

// Mock data for Restaurant
export const mockRestaurants: Restaurant[] = [
  // ... Предположим, что у вас есть 12 разных ресторанов
  // Например, первый ресторан
  {
    id: 1,
    name: "Итальянская кухня",
    description: "Аутентичная итальянская кухня в сердце города",
    category: mockCategories.slice(0, 2),
    image: restaurantImg,
    ordersCount: 120,
    meals: mockMeals.slice(0, 3), // Некоторые блюда из меню
    location: "Улица Пасты 123, Город Италии",
    address: "Улица Пасты 123, Город Италии, IT 12345",
  },
  {
    id: 2,
    name: "Испанская кухня",
    description: "Аутентичная итальянская кухня в сердце города",
    category: mockCategories.slice(0, 2),
    image: restaurantImg,
    ordersCount: 120,
    meals: mockMeals.slice(0, 3), // Некоторые блюда из меню
    location: "Улица Пасты 123, Город Италии",
    address: "Улица Пасты 123, Город Италии, IT 12345",
  },
  {
    id: 3,
    name: "Франзуская кухня",
    description: "Аутентичная итальянская кухня в сердце города",
    category: mockCategories.slice(0, 2),
    image: restaurantImg,
    ordersCount: 120,
    meals: mockMeals.slice(0, 3), // Некоторые блюда из меню
    location: "Улица Пасты 123, Город Италии",
    address: "Улица Пасты 123, Город Италии, IT 12345",
  },
  // ... Другие рестораны
];

// Mock data for Client
export const mockClients: Client[] = [
  // ... Предположим, что у вас есть 12 разных клиентов
  // Например, первый клиент
  {
    id: 1,
    email: "ivan.ivanov@example.com",
    fullName: "Иван Иванов",
    phone: "123-456-7890",
    rewardPoints: 150,
    restarauntId: 1, // Опционально, связан с первым рестораном
  },
  // ... Другие клиенты
];

// Mock data for Order
export const mockOrders: Order[] = [
  // ... Предположим, что у вас есть 12 разных заказов
  // Например, первый заказ
  {
    id: 1,
    client: mockClients[0], // Предполагается, что заказ сделан первым клиентом
    products: [
      {
        quantity: 2,
        mealId: mockMeals[0].id, // Ссылка на первое блюдо, пицца Маргарита
        notes: ["Дополнительный сыр", "Без чеснока"],
      },
      // ... другие продукты в заказе
    ],
  },
  // ... Другие заказы
];

// Теперь моковые данные для всех типов доступны для использования.
