package zelimkhan.magomadov.cmdhack.home

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import zelimkhan.magomadov.cmdhack.R
import zelimkhan.magomadov.cmdhack.ui.theme.BackgroundColor
import zelimkhan.magomadov.cmdhack.ui.theme.CMDHackTheme

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FoodCard(
    modifier: Modifier = Modifier,
    data: Restaurant,
    onClick: () -> Unit = {},
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        onClick = onClick
    ) {
        Box {
            Image(
                painter = painterResource(id = R.drawable.food),
                contentDescription = ""
            )

            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .align(Alignment.BottomStart)
                    .background(
                        brush = Brush.verticalGradient(
                            colors = listOf(Color(0x15000000), Color.Black),
                        )
                    )
                    .padding(all = 8.dp)
            ) {
                Text(
                    text = data.name,
                    fontSize = 28.sp,
                    color = Color.White
                )
                Text(
                    text = data.description,
                    fontSize = 14.sp,
                    color = Color.White
                )
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
            FoodCard(
                modifier = Modifier.padding(all = 8.dp),
                data = Restaurant(
                    id = 0,
                    name = "Paradise",
                    description = "Самый лучший ресторан в мире",
                    image = "https://i.pinimg.com/originals/8b/26/4b/8b264b78afef7ee93227346912c91fa8.jpg",
                )
            )
        }
    }
}