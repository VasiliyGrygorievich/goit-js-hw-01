'use strict'

const credits = 23580;
const pricePerDroid = 3000;

let totalPrice;
let userBalance;
let numberDroids = prompt('Какое количесво дроидов вы хотите купить?');


if (numberDroids === null) {
    console.log('Отменено пользователем!');
}

else {
    let totalPrice = pricePerDroid * numberDroids;
    console.log(`Сумма заказа ${totalPrice} кредитов`);

    if (totalPrice <= credits) {
        let userBalance = credits - totalPrice;
        console.log(`Вы купили ${numberDroids} дроидов, на счету осталось ${credits} кредитов.`);
    }

    if (totalPrice > credits) {
        console.log("Недостаточно средств на счету!");
    }
} 



