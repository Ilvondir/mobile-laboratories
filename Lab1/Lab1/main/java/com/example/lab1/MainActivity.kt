package com.example.lab1

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.activity.ComponentActivity
import com.example.lab1.R.id.button_czesc
import com.example.lab1.R.id.button_dzienDobry
import com.example.lab1.R.id.text_witam
import com.example.lab1.R.layout.layout

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(layout)

        findViewById<Button>(button_czesc).setOnClickListener {
            findViewById<TextView>(text_witam).setText("Cześć!")
            var message = Toast.makeText(applicationContext, "Cześć!", Toast.LENGTH_SHORT)
            message.show()
        }

        findViewById<Button>(button_dzienDobry).setOnClickListener {
            findViewById<TextView>(text_witam).setText("Dzień dobry!")
            var message = Toast.makeText(applicationContext, "Dzień dobry!", Toast.LENGTH_SHORT)
            message.show()
        }
    }
}