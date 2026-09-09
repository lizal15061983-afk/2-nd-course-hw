//Задание 1

let password = "пароль";
let userPassword = prompt("Введите пароль");
if (userPassword === password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

//Задание 2

// Проверка для числа 2
let c = 2;
if (c > 0 && c < 10) {
  console.log("Для 2: Верно");
} else {
  console.log("Для 2: Неверно");
}

// Проверка для числа 0
c = 0;
if (c > 0 && c < 10) {
  console.log("Для 0: Верно");
} else {
  console.log("Для 0: Неверно");
}

//  Проверка для числа 10
c = 10;
if (c > 0 && c < 10) {
  console.log("Для 10: Верно");
} else {
  console.log("Для 10: Неверно");
}

// Проверка для числа -3
c = -3;
if (c > 0 && c < 10) {
  console.log("Для -3: Верно");
} else {
  console.log("Для -3: Неверно");
}

// Задание 3

let d = 150;
let e = 50;

if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//Задание 4

//Исправьте код с помощью преобразования типов, чтобы на экран выводилось число
//5, а не строка '23'

//let a = '2';
//let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
//alert(a + b);

let a = "2";
let b = "3";

alert(+a + +b);

// Задание 5
let monthNumber = 12;

if (monthNumber > 13) {
  console.log("Ошибка: номер месяца больше 13");
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log("Зима");
      break;

    case 3:
    case 4:
    case 5:
      console.log("Весна");
      break;

    case 6:
    case 7:
    case 8:
      console.log("Лето");
      break;

    case 9:
    case 10:
    case 11:
      console.log("Осень");
      break;

    default:
      console.log("Неверный номер месяца");
  }
}

// Дополнительное задание 1

let num = Number(prompt("Пожалуйста, введите любое число"));

// Проверяем с помощью Number.isNaN(), является ли введенное значение числом
if (Number.isNaN(num)) {
  alert("Вы ввели не число");
} else {
  // Проверяем число на четность с помощью знака остатка от деления %
  if (num % 2 === 0) {
    alert("Число четное");
  } else {
    alert("Число нечетное");
  }
}

//Дополнительное задание 2

let clientOS = Number(prompt("Введите тип вашей  ОС (0 - iOS, 1 - Android):"));
if (clientOS === 0) {
  console.log("установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
  console.log("установите версию приложения для Android по ссылке");
} else {
  console.log(" Ошибка: введите  0 или 1");
}

//Дополнительное задание 3

let clientos = Number(prompt("Введите тип ОС (0 — iOS, 1 — Android):")); //Не называть одинаково  через let

let clientDeviceYear = Number(prompt("Введите год выпуска вашего телефона:"));

if (clientos === 0) {
  if (clientDeviceYear < 2015) {
    alert("Установите облегченную версию приложения для iOS по ссылке");
  } else {
    alert("Установите версию приложения для iOS по ссылке");
  }
} else if (clientOS === 1) {
  if (clientDeviceYear < 2015) {
    alert("Установите облегченную версию приложения для Android по ссылке");
  } else {
    alert("Установите версию приложения для Android по ссылке");
  }
} else {
  alert("Неизвестная операционная система");
}
