// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // Выводим текущий элемент

  if (arr[i] === 10) {
    break;
  }
}

// Задание 2

const arrTwo = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  if (arrTwo[i] === 4) {
    console.log(i);
    break;
  }
}

// Задание 3

const numsC = [1, 3, 5, 10, 20];

console.log(numsC.join(" "));

// Задание 4

const nest = [];

for (let i = 0; i < 3; i++) {
  const row = []; // Создаем пустую внутреннюю строку

  for (let j = 0; j < 3; j++) {
    row.push(1); // Заполняем строку единицами
  }

  nest.push(row); // Добавляем готовую строку в массив nest
}

console.log(nest);

// Задание 5

const ones = [1, 1, 1];

ones.push(2, 2, 2);

console.log(ones);

// Задание 6

const mixed = [9, 8, 7, "a", 6, 5];

mixed.sort(); //при сортирке буква "а" уйдет в конец

const result = mixed.filter((item) => item !== "a"); // 2. Удаляем букву 'a'

console.log(result);

// Задание 7

const items = [9, 8, 7, 6, 5];

const guess = Number(prompt("Угадайте число из массива:"));

if (items.includes(guess)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

//Задание 8

const string = "abcdef";

const reversedStr = string.split("").reverse().join("");

console.log(reversedStr);

// Задание 9

const data = [
  [1, 2, 3],
  [4, 5, 6],
];

const flatArray = [...data[0], ...data[1]]; //оператор spread (...) объединяет

console.log(flatArray);

//Задание 10

const vals = [3, 7, 2, 9, 5, 1]; // рандомно числа

// Цикл идет до (vals.length - 1), чтобы не трогать последний элемент,
// у которого нет пары для сложения
for (let i = 0; i < vals.length - 1; i++) {
  const sum = vals[i] + vals[i + 1];
  console.log(sum);
}

//Задание 11

function getSquares(arr) {
  return arr.map((num) => num * num); // Возводим каждое число в квадрат
}

const myNumbers = [1, 2, 3, 4]; // проверка работы функции

console.log(getSquares(myNumbers));

//Задание 12

function getLengths(arr) {
  return arr.map((word) => word.length); // Заменяем каждое слово на его длину
}

const myWords = ["apple", "banana", "kiwi"]; //проверка работы функции

console.log(getLengths(myWords)); // выведет 5, 6, 4

// Задание 13

function getNegatives(arr) {
  return arr.filter((num) => num < 0); // Оставляем только те числа, которые меньше нуля
}

const testNumbers = [1, -2, 3, -4, 5]; ////проверка работы функции

console.log(getNegatives(testNumbers)); // Выведет только отрицательные: [-2, -4]

// Задание 14

const randoms = [];

for (let i = 0; i < 10; i++) {
  const randomNum = Math.floor(Math.random() * 11); //  Math.floor округляет вниз до целого числа от 0 до 10 
  randoms.push(randomNum);
}

const evens = randoms.filter((num) => num % 2 === 0);

console.log("Исходный массив:", randoms);
console.log("Массив с чётными числами:", evens);

// Задание 15

const scores = [];

for (let i = 0; i < 6; i++) {
  const randomNum = Math.floor(Math.random() * 10) + 1; //Math.floor округляет вниз до целого от 1 до 10
  scores.push(randomNum);
}

// сумма всех элементов массива с помощью метода reduce()
const totalSum = scores.reduce((sum, current) => sum + current, 0);

// Находим среднее арифметическое (делим сумму на количество элементов)
const average = totalSum / scores.length;

console.log("Сгенерированный массив:", scores);
console.log("Среднее арифметическое:", average);
