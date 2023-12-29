package zelimkhan.magomadov.cmdhack.cart

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import com.ramcosta.composedestinations.annotation.Destination
import zelimkhan.magomadov.cmdhack.R
import zelimkhan.magomadov.cmdhack.ui.theme.BackgroundColor
import zelimkhan.magomadov.cmdhack.ui.theme.CMDHackTheme
import zelimkhan.magomadov.cmdhack.ui.theme.Gray
import zelimkhan.magomadov.cmdhack.ui.theme.Primary

@Destination
@Composable
fun CartScreen() {
    CartScreenContent(cartList)
}

data class Cart(
    val name: String,
    val description: String,
    val price: Int,
    val image: String
)

val cartList = listOf(
    Cart(
        name = "Бургер",
        description = "Сочный мощный бургер",
        price = 149,
        image = "https://gotovim-doma.ru/images/recipe/e/ce/eceb453fefbab09075a8c779712e52f8.jpg"
    ),
    Cart(
        name = "Пицца",
        description = "Сочный мощный пицца",
        price = 399,
        image = "https://images-ext-2.discordapp.net/external/SdVox0s25sAnCAXkoqT6PjWwGP_tYVXzBOqF8IW1W5w/https/s.restorating.ru/w/1920x1080/articles/2920/None-111028.jpeg?format=webp&width=960&height=643"
    ),
    Cart(
        name = "Шаурма",
        description = "Сочный мощный шаурмец",
        price = 170,
        image = "https://images-ext-1.discordapp.net/external/qhODJItEEH1NAlW6YrdiVpBeCCwTY2iMwyxsVQsdZdg/https/kremlin-product.ru/upload/medialibrary/241/jfw6bequvf8s8mcum1npqc0jx1v1ngad/grilled_vegetables.jpg?format=webp&width=966&height=643"
    )
)

@Composable
fun CartScreenContent(list: List<Cart>) {
    LazyColumn {
        items(list) {
            CartComponent(it)
            Spacer(modifier = Modifier.height(32.dp))
        }
        item {
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp)
            ) {
                Text(
                    modifier = Modifier.padding(16.dp),
                    text = "Итого: ${list.sumOf { it.price }}",
                    color = Color.White,
                    fontSize = 22.sp
                )
                Button(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Primary),
                    onClick = { }
                ) {
                    Text(text = "Оформить заказ", color = Color.White)
                }
            }
        }
    }
}

@Composable
fun CartComponent(cart: Cart) {
    var count by remember { mutableIntStateOf(1) }

    Card(
        modifier = Modifier.padding(horizontal = 16.dp),
        elevation = CardDefaults.cardElevation(
            defaultElevation = 4.dp
        )
    ) {
        AsyncImage(
            model = cart.image,
            contentDescription = null
        )
        Column(
            modifier = Modifier
                .background(color = Gray)
                .padding(16.dp)
        ) {
            Text(text = cart.name, fontSize = 24.sp, color = Color.White)
            Spacer(modifier = Modifier.height(8.dp))
            Text(text = cart.description)
            Spacer(modifier = Modifier.height(16.dp))
            Row(
                verticalAlignment = Alignment.CenterVertically
            ) {

                Text(text = cart.price.toString(), color = Color.White, fontSize = 28.sp)

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.End
                ) {
                    Button(
                        shape = CircleShape,
                        onClick = {
                            count -= 1
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = Primary)
                    ) {
                        Text(text = "-", color = Color.White)
                    }

                    Spacer(modifier = Modifier.width(8.dp))

                    Text(text = count.toString(), fontSize = 28.sp, color = Color.White)

                    Spacer(modifier = Modifier.width(8.dp))

                    Button(
                        shape = CircleShape,
                        onClick = {
                            count += 1
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = Primary)
                    ) {
                        Text(text = "+", color = Color.White)
                    }
                }
            }

        }
    }
}

@Preview
@Composable
private fun Preview() {
    CMDHackTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = BackgroundColor
        ) {
            CartScreenContent(cartList)
        }
    }
}