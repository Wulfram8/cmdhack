package zelimkhan.magomadov.cmdhack.core.components.search

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Search
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import zelimkhan.magomadov.cmdhack.ui.theme.Gray

@Composable
fun SearchField() {
    TextField(
        value = "",
        onValueChange = {},
        shape = RoundedCornerShape(16.dp),
        placeholder = {
            Text(text = "Поиск по ресторанам")
        },
        trailingIcon = {
            Icon(imageVector = Icons.Rounded.Search, contentDescription = null)
        },
        colors = TextFieldDefaults.colors(
            unfocusedContainerColor = Gray,
            focusedContainerColor = Gray,
            disabledContainerColor = Gray,
            errorContainerColor = Gray,
            disabledIndicatorColor = Color.Transparent,
            errorIndicatorColor = Color.Transparent,
            focusedIndicatorColor = Color.Transparent,
            unfocusedIndicatorColor = Color.Transparent
        )
    )
}