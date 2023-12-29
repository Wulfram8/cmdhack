package zelimkhan.magomadov.cmdhack.home

data class Restaurant(
    val id: Int,
    val name: String,
    val description: String,
    val image: String,
)

val RESTAURANTS = listOf(
    Restaurant(
        id = 0,
        name = "Дубай",
        description = "Самый лучший ресторан в мире",
        image = "https://i.pinimg.com/originals/8b/26/4b/8b264b78afef7ee93227346912c91fa8.jpg",
    ),
    Restaurant(
        id = 1,
        name = "Paradise",
        description = "Самый лучший ресторан в мире",
        image = "https://i.pinimg.com/originals/8b/26/4b/8b264b78afef7ee93227346912c91fa8.jpg",
    ),
    Restaurant(
        id = 3,
        name = "Азиатский уголок",
        description = "Самый лучший ресторан в мире",
        image = "https://i.pinimg.com/originals/8b/26/4b/8b264b78afef7ee93227346912c91fa8.jpg",
    ),
    Restaurant(
        id = 4,
        name = "Paradise",
        description = "Самый лучший ресторан в мире",
        image = "https://i.pinimg.com/originals/8b/26/4b/8b264b78afef7ee93227346912c91fa8.jpg",
    ),
    Restaurant(
        id = 5,
        name = "Paradise",
        description = "Самый лучший ресторан в мире",
        image = "https://i.pinimg.com/originals/8b/26/4b/8b264b78afef7ee93227346912c91fa8.jpg",
    ),
    Restaurant(
        id = 6,
        name = "Paradise",
        description = "Самый лучший ресторан в мире",
        image = "https://i.pinimg.com/originals/8b/26/4b/8b264b78afef7ee93227346912c91fa8.jpg",
    )
)