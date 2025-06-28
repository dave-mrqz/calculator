
let display = document.getElementById("display");
let clearBtn = document.getElementById("clear");
const numButtons = document.querySelectorAll(".btn.btn-primary[data-value]");
const operatorButtons = document.querySelectorAll(".operator");


document.getElementById("decimal").addEventListener("click", function () {
    display.value += ".";
});

document.getElementById("delete").addEventListener("click", function () {
    display.value = display.value.slice(0, -1);
});

numButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        display.value += button.getAttribute("data-value");
    });
});

clearBtn.addEventListener("click", function () {
    display.value = "";
});



document.getElementById("equals").addEventListener("click", function () {
    try {
        // Only allow digits, operators, and decimal points
        if (/^[\d+\-*/.() ]+$/.test(display.value)) {
            const result = Function(`"use strict"; return (${display.value})`)();
            display.value = result;
        } else {
            display.value = "Invalid Input";
        }
    } catch (err) {
        display.value = "Error";
    }
});


operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        display.value += button.textContent;
    });
});