// Задание 1

const str = "js";

// Преобразуем строку в верхний регистр с помощью метода toUpperCase()
const result = str.toUpperCase();

console.log(result);

// Задание 2

function filterByPrefix(arr, str) {
  const lowerStr = str.toLowerCase(); // Приводим искомую строку к нижнему регистру

  // Фильтруем исходный массив
  return arr.filter((item) => {
    return item.toLowerCase().startsWith(lowerStr); // Приводим текущий элемент массива к нижнему регистру и проверяем начало строки
  });
}

// Пример
//const words = ['Яблоко', 'банан', 'Ягода', 'Апельсин', 'якорь'];
//const search = 'я';

//const result = filterByPrefix(words, search);
//console.log(result); // Выведет: ['Яблоко', 'Ягода', 'якорь']

//Задание 3

const number = 32.58884;

// До меньшего целого
const floorResult = Math.floor(number);
//  До большего целого
const ceilResult = Math.ceil(number);

// До ближайшего целого
const roundResult = Math.round(number);

console.log(floorResult); // 32
console.log(ceilResult); // 33
console.log(roundResult); // 33

//Задание 4

const minResult = Math.min(52, 53, 49, 77, 21, 32);
const maxResult = Math.max(52, 53, 49, 77, 21, 32);

console.log(minResult); //  минимальное 21
console.log(maxResult); //  максимальное 77

// Задание 5

function printRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1; // Прибавляем 1, чтобы сдвинуть диапазон и получить числа от 1 до 10 (тк рандомно не включает 10)

  console.log(randomNumber);
}

// Пример вызова функции:
//printRandomNumber(); // Выведет в консоль случайное целое число от 1 до 10

// Задание 6

function generateRandomArray(num) {
  const result = [];

  // Длина массива должна быть в два раза меньше переданного числапо условиям задачи
  const arrayLength = Math.floor(num / 2);

  for (let i = 0; i < arrayLength; i++) {
    // Генерируем случайное целое число от 0 до переданного числа (включительно)
    const randomNum = Math.floor(Math.random() * (num + 1));
    result.push(randomNum);
  }

  return result;
}

// Пример
//const resultArray = generateRandomArray(10); // Длина будет 5, числа от 0 до 10
//console.log(resultArray);

// Задание 7

function getRandomInRange(min, max) {
  // Формула для генерации случайного целого числа от min до max (включительно)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

// Пример использования:
//const result = getRandomInRange(5, 15);

//console.log(result); // Выведет случайное целое число от 5 до 15

// Задание 8

const currentDate = new Date();

console.log(currentDate);

// Задание 9

const futureDate = new Date(); // текущая даиа
futureDate.setDate(futureDate.getDate() + 73); // дата.которая наступит через 73 дня

console.log(futureDate);

// Задание 10

function formatDateTime(date) {
  // Получаем число
  const day = date.getDate();

  // Получаем месяц в родительном падеже
  const month = date.toLocaleString("ru-RU", { month: "long" });

  // Получаем год
  const year = date.getFullYear();

  // Получаем день недели
  const weekday = date.toLocaleString("ru-RU", { weekday: "long" });

  // Получаем время в формате ЧЧ:ММ:СС с ведущими нулями
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Собираем всё в одну строку по заданию
  return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${hours}:${minutes}:${seconds}`;
}

// Пример использования:
//const now = new Date();
//const formattedResult = formatDateTime(now);

//console.log(formattedResult);
