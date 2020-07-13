"use strict"

let input;
let total = 0;

while (true) {
    input = prompt("Введите число");

    if (input === null) {
        console.log("Отменено пользователем");
        break;
    }
    
    input = Number(input);
    const wrongNumber = Number.isNaN(input);

    if (wrongNumber) {
        console.log("Было введено не число, попробуйте еще раз.");
        continue;
    }

    total += Number(input);
}

alert(`Общая сумма чисел равна ${total}`);
