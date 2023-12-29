package zelimkhan.magomadov.cmdhack.core.components.category

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FilterChip
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import zelimkhan.magomadov.cmdhack.ui.theme.BackgroundColor
import zelimkhan.magomadov.cmdhack.ui.theme.CMDHackTheme

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun Categories(categories: List<CategoriesState>) {
    LazyRow(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.Center
    ) {
        items(categories.count()) {
            FilterChip(
                modifier = Modifier.padding(horizontal = 4.dp),
                onClick = { },
                label = { Text(text = categories[it].name) },
                selected = categories[it].isSelected,
            )
        }
    }
}

val CATEGORIES_STATES = listOf(
    CategoriesState(
        id = 0,
        name = "Здоровое питание",
        isSelected = true
    ),
    CategoriesState(
        id = 0,
        name = "Азиатская кухня",
        isSelected = false
    ),
    CategoriesState(
        id = 0,
        name = "Американская кухня",
        isSelected = false
    ),
    CategoriesState(
        id = 0,
        name = "Category 4",
        isSelected = false
    ),
    CategoriesState(
        id = 0,
        name = "Category 5",
        isSelected = false
    ),
    CategoriesState(
        id = 0,
        name = "Category 6",
        isSelected = false
    ),
)

@Preview
@Composable
private fun Preview() {
    CMDHackTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = BackgroundColor,
        ) {
            Categories(categories = CATEGORIES_STATES)
        }
    }
}