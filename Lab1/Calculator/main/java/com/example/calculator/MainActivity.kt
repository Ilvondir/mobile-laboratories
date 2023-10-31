package com.example.calculator

import android.annotation.SuppressLint
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.activity.ComponentActivity
import java.math.BigDecimal
import java.math.RoundingMode


class MainActivity : ComponentActivity() {
    @SuppressLint("SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {

        fun numberButton(number: Number) {
            val num = findViewById<TextView>(R.id.text_current).text
            if (num.equals("0")) findViewById<TextView>(R.id.text_current).setText(number.toString())
            else findViewById<TextView>(R.id.text_current).setText(num.toString() + number.toString())
        }

        fun signButton(sign: Char) {
            val num = findViewById<TextView>(R.id.text_current).text
            findViewById<TextView>(R.id.text_old).setText(num.toString() + " " + sign)
            findViewById<TextView>(R.id.text_current).setText("0")
        }

        super.onCreate(savedInstanceState)

        setContentView(R.layout.layout)

        findViewById<Button>(R.id.button0).setOnClickListener() {
            numberButton(0)
        }

        findViewById<Button>(R.id.button1).setOnClickListener() {
            numberButton(1)
        }

        findViewById<Button>(R.id.button2).setOnClickListener() {
            numberButton(2)
        }

        findViewById<Button>(R.id.button3).setOnClickListener() {
            numberButton(3)
        }

        findViewById<Button>(R.id.button4).setOnClickListener() {
            numberButton(4)
        }

        findViewById<Button>(R.id.button5).setOnClickListener() {
            numberButton(5)
        }

        findViewById<Button>(R.id.button6).setOnClickListener() {
            numberButton(6)
        }

        findViewById<Button>(R.id.button7).setOnClickListener() {
            numberButton(7)
        }

        findViewById<Button>(R.id.button8).setOnClickListener() {
            numberButton(8)
        }

        findViewById<Button>(R.id.button9).setOnClickListener() {
            numberButton(9)
        }

        findViewById<Button>(R.id.button_undo).setOnClickListener() {
            val b1 = findViewById<TextView>(R.id.text_current).text
            if (b1.toString().dropLast(1)
                    .equals("")
            ) findViewById<TextView>(R.id.text_current).setText("0")
            else findViewById<TextView>(R.id.text_current).setText(b1.toString().dropLast(1))
        }

        findViewById<Button>(R.id.button_minus).setOnClickListener() {
            signButton('-')
        }

        findViewById<Button>(R.id.button_divis).setOnClickListener() {
            signButton('/')
        }

        findViewById<Button>(R.id.button_multi).setOnClickListener() {
            signButton('*')
        }

        findViewById<Button>(R.id.button_plus).setOnClickListener() {
            signButton('+')
        }

        findViewById<Button>(R.id.button_res).setOnClickListener() {
            val start = findViewById<TextView>(R.id.text_old).text
            val end = findViewById<TextView>(R.id.text_current).text
            var result: Double;

            val symbol = start.last()

            if ((symbol.toString()) == "+") {
                result = start.toString().dropLast(2).toDouble() + end.toString().toDouble()
                findViewById<TextView>(R.id.text_old).setText(" ")
                findViewById<TextView>(R.id.text_current).setText("$result")
            } else if ((symbol.toString()) == "-") {
                result = start.toString().dropLast(2).toDouble() - end.toString().toDouble()
                findViewById<TextView>(R.id.text_old).setText(" ")
                findViewById<TextView>(R.id.text_current).setText("$result")
            } else if ((symbol.toString()) == "*") {
                result = start.toString().dropLast(2).toDouble() * end.toString().toDouble()
                findViewById<TextView>(R.id.text_old).setText(" ")
                findViewById<TextView>(R.id.text_current).setText("$result")
            } else if ((symbol.toString()) == "/") {

                if ("$end".toInt() == 0) {
                    var message =
                        Toast.makeText(
                            applicationContext,
                            "Don't divide by 0",
                            Toast.LENGTH_SHORT
                        )
                    message.show()
                } else {
                    result = BigDecimal(
                        start.toString().dropLast(2).toDouble() / end.toString().toDouble()
                    ).setScale(4, RoundingMode.HALF_EVEN).toDouble()
                    findViewById<TextView>(R.id.text_old).setText(" ")
                    findViewById<TextView>(R.id.text_current).setText("$result")
                }
            }
        }
    }
}

