package zelimkhan.magomadov.cmdhack.restaurant

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import zelimkhan.magomadov.cmdhack.R
import zelimkhan.magomadov.cmdhack.ui.theme.Gray
import zelimkhan.magomadov.cmdhack.ui.theme.Primary


@Composable
fun RestaurantFoodCard(modifier: Modifier = Modifier) {
    Card(
        modifier = modifier,
        elevation = CardDefaults.cardElevation(
            defaultElevation = 4.dp
        )
    ) {
        Image(
            painter = painterResource(id = R.drawable.food),
            contentDescription = null
        )
        Column(
            modifier = Modifier
                .background(Gray)
                .padding(16.dp)
        ) {
            Text(text = "Ягненок", color = Color.White, fontSize = 22.sp)
            Spacer(modifier = Modifier.height(8.dp))
            Text(text = "Фаршированный гречневой кашей, курагой, апельсиновым и зеленым яблоком")
            Spacer(modifier = Modifier.height(8.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(text = "620 ₽", fontSize = 24.sp, color = Color.White)
                Button(
                    colors = ButtonDefaults.buttonColors(
                        containerColor = Primary
                    ),
                    shape = RoundedCornerShape(16.dp),
                    onClick = { },
                ) {
                    Text(text = "В корзину", color = Color.White, fontSize = 16.sp)
                }
            }
        }
    }
}