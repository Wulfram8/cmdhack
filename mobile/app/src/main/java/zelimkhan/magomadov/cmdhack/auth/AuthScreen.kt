package zelimkhan.magomadov.cmdhack.auth

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.ramcosta.composedestinations.annotation.Destination
import zelimkhan.magomadov.cmdhack.ui.theme.BackgroundColor
import zelimkhan.magomadov.cmdhack.ui.theme.CMDHackTheme
import zelimkhan.magomadov.cmdhack.ui.theme.Primary

@Destination
@Composable
fun AuthScreen() {
    AuthScreenContent()
}

@Composable
fun AuthScreenContent() {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Spacer(modifier = Modifier.height(32.dp))
        Text(text = "Авторизация", color = Primary, fontSize = 22.sp)
        Spacer(modifier = Modifier.height(32.dp))
        AuthTextField(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 32.dp),
            placeholderText = "Логин"
        )
        Spacer(modifier = Modifier.height(16.dp))
        AuthTextField(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 32.dp),
            placeholderText = "Пароль"
        )
        Spacer(modifier = Modifier.height(20.dp))
        Button(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 32.dp),
            onClick = { },
            shape = RoundedCornerShape(10.dp),
            colors = ButtonDefaults.buttonColors(
                containerColor = Primary
            )
        ) {
            Text(text = "Войти", color = Color.White)
        }
        TextButton(onClick = { }) {
            Text(text = "Зарегистрироваться", color = Primary)
        }
    }
}

@Composable
fun AuthTextField(
    modifier: Modifier = Modifier,
    placeholderText: String,
) {
    var value by remember { mutableStateOf("") }

    OutlinedTextField(
        modifier = modifier,
        value = value,
        onValueChange = { value = it },
        placeholder = { Text(text = placeholderText) },
        shape = RoundedCornerShape(8.dp)
    )
}

@Preview
@Composable
private fun Preview() {
    CMDHackTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = BackgroundColor
        ) {
            AuthScreenContent()
        }
    }
}