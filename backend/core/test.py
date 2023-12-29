from core.models import *

meals = [
    {
        "name": "Спагетти Болоньезе",
        "description": "Классическое итальянское блюдо с пастой и сытным мясным соусом.",
        "price": 350,
        "categories": ["Паста", "Итальянская кухня"],
        "ingredients": ["Молотый говяжий фарш", "Лук", "Чеснок", "Томатный соус", "Томаты", "Итальянские специи", "Спагетти"],
        "image": "https://kremlin-product.ru/upload/medialibrary/241/jfw6bequvf8s8mcum1npqc0jx1v1ngad/grilled_vegetables.jpg"
    },
    {
        "name": "Цезарь с курицей",
        "description": "Освежающий салат с жареной курицей, хрустящим салатом и соусом Цезарь.",
        "price": 280,
        "categories": ["Салаты", "Американская кухня"],
        "ingredients": ["Жареная куринная грудка", "Салат романо", "Крутоны", "Пармезан", "Соус Цезарь", "Лимонный сок", "Оливковое масло"],
        "image": "https://s.restorating.ru/w/1920x1080/articles/2920/None-111028.jpeg",
    },
    {
        "name": "Овощной вок",
        "description": "Быстрый и красочный вок с овощами и тофу или выбранным вами видом белка.",
        "price": 300,
        "categories": ["Овощи", "Азиатская кухня"],
        "ingredients": ["Тофу", "Брокколи", "Болгарский перец", "Морковь", "Снеговые горошинки", "Соевый соус", "Имбирь", "Чеснок", "Соевое масло"],
        "image": "https://gotovim-doma.ru/images/recipe/e/ce/eceb453fefbab09075a8c779712e52f8.jpg",
    },
    {
        "name": "Такос с говядиной",
        "description": "Ароматная приправленная говядина в тортильях с начинкой.",
        "price": 320,
        "categories": ["Мексиканская кухня"],
        "ingredients": ["Молотая говядина", "Приправа для тако", "Тортильи", "Салат", "Помидоры", "Сыр", "Сальса", "Сметана"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVW3bTlMbUA_8-fbvHUgW1KaIEKaLANG0dg&usqp=CAU",
    },
    {
        "name": "Грибной ризотто",
        "description": "Кремовое итальянское блюдо с жареными грибами и пармезаном.",
        "price": 380,
        "categories": ["Ризотто", "Итальянская кухня"],
        "ingredients": ["Рис арборио", "Грибы", "Лук", "Белое вино", "Куриный бульон", "Пармезан", "Масло"],
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsyitq8OdeFsdjKzPHO_ntFd0k9HnlM1NvA&usqp=CAU",
    },
    {
        "name": "Лосось с лимонно-укропным соусом",
        "description": "Жареный или запеченный лосось подается с ароматным соусом из лимона и укропа.",
        "price": 420,
        "categories": ["Рыба", "Скандинавская кухня"],
        "ingredients": ["Филе лосося", "Лимон", "Свежий укроп", "Оливковое масло", "Чеснок", "Соль и перец"],
        "image": "https://kandbi.com/image/catalog/blog/firmennoe-blyudo-v-restorane-chto-eto-i-kakim-ono-byvaet-2.jpg",
    },
    {
        "name": "Капрезе Панини",
        "description": "Жареный бутерброд с моцареллой, помидорами и базиликом.",
        "price": 250,
        "categories": ["Панини", "Итальянская кухня"],
        "ingredients": ["Хлеб чиабатта", "Моцарелла", "Помидоры", "Свежие листья базилика", "Бальзамический глазурь", "Оливковое масло"],
        "image": "https://cdn.lifehacker.ru/wp-content/uploads/2020/04/5e95669b997f5_j3hekga7e3r41__700_1587380182-e1587380213139.jpg",
    },
    {
        "name": "Овощное Карри",
        "description": "Острое и ароматное карри с разнообразными овощами.",
        "price": 290,
        "categories": ["Карри", "Азиатская кухня"],
        "ingredients": ["Смешанные овощи", "Карри-паста", "Кокосовое молоко", "Лук", "Чеснок", "Имбирь", "Рис басмати"],
        "image": "https://e0.edimdoma.ru/data/posts/0002/1936/21936-ed4_wide.jpg?1679398231",
    },
    {
        "name": "Куриное Альфредо Паста",
        "description": "Кремовый соус Альфредо с жареной куриной грудкой над лапшой феттучини.",
        "price": 360,
        "categories": ["Паста", "Итальянская кухня"],
        "ingredients": ["Лапша феттучини", "Куриная грудка", "Тяжелая сливка", "Пармезан", "Масло", "Чеснок", "Соль и перец"],
        "image": "https://hip2go.ru/api2/images/IikoProducts26/c1c668e7c6-1_500x353.jpg",
    },
    {
        "name": "Салат с киноа, авокадо и чёрными бобами",
        "description": "Питательный салат с киноа, авокадо, чёрными бобами и лаймовым винегретом.",
        "price": 310,
        "image": "https://takethemameal.com/files_images_v2/stam.jpg",
        "categories": ["Салаты", "Здоровое питание"],
        "ingredients": ["Киноа", "Чёрные бобы", "Авокадо", "Вишня томаты", "Красный лук", "Кинза", "Сок лайма", "Оливковое масло", "Соль и перец"],
    }
]

for i in meals:
    for r in Restaurant.objects.all():
        meal = Meal.objects.create(
            name=i['name'], description=i['description'], price=i['price'], image=i['image'], restaurant=r)
        for cat in i['categories']:
            category, _ = Category.objects.get_or_create(
                name=cat, defaults={'name': cat})
            meal.categories.add(category)
        for ing in i['ingredients']:
            ing, _ = Ingredient.objects.get_or_create(
                name=ing, defaults={'name': ing})
            meal.ingredients.add(ing)


restaurants = [
    {
        "name": "Итальянская Гастрономия",
        "description": "Приглашаем вас насладиться аутентичной итальянской кухней.",
        "image": "https://gotovim-doma.ru/images/recipe/e/ce/eceb453fefbab09075a8c779712e52f8.jpg",
        "address": "ул. Итальянская, 123",
        "categories": ["Паста", "Итальянская кухня"]
    },
    {
        "name": "Салатная Оазис",
        "description": "Здесь вы найдете разнообразные свежие салаты для здорового питания.",
        "image": "https://www.tokyo-city.ru/images/interesno/ot-edy-bednyakov-do-izyskannykh.jpg",
        "address": "пр. Здоровья, 456",
        "categories": ["Салаты", "Здоровое питание"]
    },
    {
        "name": "Американский Дайнер",
        "description": "Погрузитесь в атмосферу настоящего американского дайнера с классическими блюдами.",
        "image": "https://www.bahroma1.ru/templates/bahroma1/img/slider/2300x1500_61b11ccbd3b30.jpg",
        "address": "ул. Американская, 789",
        "categories": ["Американская кухня"]
    },
    {
        "name": "Азиатский Уголок",
        "description": "Приготовлено с любовью — азиатские блюда с использованием свежих овощей и традиционных приправ.",
        "image": "https://www.edimdoma.ru/data/posts/0002/1061/21061-ed4_wide.jpg?1631187425",
        "address": "пр. Востока, 101",
        "categories": ["Овощи", "Азиатская кухня"]
    },
    {
        "name": "Мексиканский Рай",
        "description": "Острые и сочные вкусы Мексики ждут вас в нашем ресторане.",
        "image": "https://e2.edimdoma.ru/data/fat_tags/0000/1463/1463-ed4_wide.jpg?1515755509",
        "address": "ул. Тако, 567",
        "categories": ["Мексиканская кухня"]
    },
    {
        "name": "Ризотто Мастер",
        "description": "Изысканные ризотто, приготовленные с использованием только лучших ингредиентов.",
        "image": "https://s.restorating.ru/w/1920x1080/articles/2920/None-111028.jpeg",
        "address": "пл. Ризотто, 234",
        "categories": ["Ризотто"]
    },
    {
        "name": "Морская Симфония",
        "description": "Погрузитесь в мир свежих морепродуктов и уютной скандинавской атмосферы.",
        "image": "https://s1.eda.ru/StaticContent/Photos/170304161224/210406204345/p_O.jpg",
        "address": "ул. Скандинавская, 876",
        "categories": ["Рыба", "Скандинавская кухня"]
    },
    {
        "name": "Панини Королевство",
        "description": "Бутерброды панини с различными начинками, созданные для настоящих гурманов.",
        "image": "https://e0.edimdoma.ru/data/posts/0002/1936/21936-ed4_wide.jpg?1679398231",
        "address": "пр. Панини, 345",
        "categories": ["Панини"]
    },
    {
        "name": "Карри Уголок",
        "description": "Ароматные блюда карри, приготовленные с использованием специй прямо из Индии.",
        "image": "https://cdn.lifehacker.ru/wp-content/uploads/2020/04/5e95669b997f5_j3hekga7e3r41__700_1587380182-e1587380213139.jpg",
        "address": "ул. Карри, 678",
        "categories": ["Карри"]
    },
    {
        "name": "Зеленый Дом",
        "description": "Здесь вы найдете богатый выбор блюд для здорового образа жизни и долголетия.",
        "image": "https://raw.githubusercontent.com/Wulfram8/storage/main/chech_rest_logo.png",
        "address": "пл. Здоровья, 987",
        "categories": ["Здоровое питание"]
    }
]


for i in restaurants:
    re = Restaurant.objects.create(
        name=i['name'], description=i['description'], address=i['address'], image=i['image'])
    for cat in i['categories']:
        category, _ = Category.objects.get_or_create(
            name=cat, defaults={'name': cat})
        re.categories.add(category)
