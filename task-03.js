"use strict"

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let enterPassword = prompt("Введите пароль!");

if (enterPassword === null) {
    message = ("Отменено пользователем!");
    console.log(message);
}

else if(enterPassword === ADMIN_PASSWORD) {
    message = ("Добро пожаловать!");
    console.log(message);
}

else {
    message = ("Доступ запрещен, неверный пароль!");
    console.log(message);
}