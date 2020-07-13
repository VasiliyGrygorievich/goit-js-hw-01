"use strict"

const countryChina = 'китай';
const countryChile = 'чили';
const countryAustralia = 'австралия';
const countryIndia = 'индия';
const countryJamaica = 'ямайка';

const deliveryChina = 100;
const deliveryChile = 250;
const deliveryAustralia = 170;
const deliveryIndia = 80;
const deliveryJamaica = 120;

let deliveryToCountry = prompt(`Укажите страну для доставки?`);
let country = deliveryToCountry.toLocaleLowerCase();

if (country !== null) {
  switch (country) {
    case countryChina:
      alert(`Доставка в ${deliveryToCountry} будет стоить ${deliveryChina} кредитов`);
      break;

    case countryChile:
      alert(`Доставка в ${deliveryToCountry} будет стоить ${deliveryChile} кредитов`);
      break;

    case countryAustralia:
      alert(`Доставка в ${deliveryToCountry} будет стоить ${deliveryAustralia} кредитов`);
      break;

    case countryIndia:
      alert(`Доставка в ${deliveryToCountry} будет стоить ${deliveryIndia} кредитов`);
      break;

    case countryJamaica:
      alert(`Доставка в ${deliveryToCountry} будет стоить ${deliveryJamaica} кредитов`);
      break;

    default:
      alert(`В вашей стране доставка недоступна!`);
  }
} 

else {
  console.log(`Отменено пользователем!`);
}