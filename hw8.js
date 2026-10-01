function callbackWithArrayLength(arr, callback) {
  // console.log(arr);
  /* Писать код тут */
  callback(arr.length);
}

callbackWithArrayLength([1], (length) => {
  console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
  console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
  console.log(l);
});

const timer = (deadline) => {
  if (isNaN(+deadline)) {
    // + − приводим значение к number, если это NaN,
    console.log("Передано некорректное число"); // выводим сообщение
    return; // Выходим из функции
  }

  let time = deadline;
  const interval = setInterval(() => {
    time -= 1;
    console.log(time);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("Время истекло!");
  }, deadline * 1000);
};

const deadline = prompt("На сколько секунд вы хотите поставить таймер?");
timer(deadline);
// Повторить с интервалом 2 секунды
let timerId = setInterval(() => alert("tick"), 2000);

// Остановить вывод через 5 секунд
setTimeout(() => {
  clearInterval(timerId);
  alert("stop");
}, 5000);

//Домашняя работа

//ЗАДАНИЕ 1

const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

//  Условие -Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort((a, b) => a.age - b.age));

//ЗАДАНИЕ 2

function isPositive(number) {
  return number > 0;
}

function isMale(person) {
  return person.gender === "male";
}

function filter(arr, ruleFunction) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Проверка первая: Фильтрация чисел
console.log(filter([3, -4, 1, 9], isPositive));

// Проверка вторая: Фильтрация пользователей по полу
const users = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(users, isMale));

//ЗАДАНИЕ 3

// Запускаем вывод даты каждые 3 секунды (3000 миллисекунд)
const intervalId = setInterval(() => {
  console.log(new Date().toLocaleString()); //toLocaleString()  превратит это в аккуратную строку по российским стандартам времени
}, 3000);

// Через 30 секунд (30000 миллисекунд) останавливаем интервал и выводим финальное сообщение
setTimeout(() => {
  clearInterval(intervalId);
  console.log("30 секунд прошло");
}, 30000);

//ЗАДАНИЕ 4

function delayForSecond(callback) {
  // Код писать можно только внутри этой функции -это условие задачи
  //callback();
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб!");
});

//ЗАДАНИЕ 5

// Функция delayForSecond через 1 секунду пишет в консоль
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

// Функция sayHi(колбэк принимает значение(cb)) выводит в консоль приветствие для указанного имени
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя -условие задания

// Нужно изменить код ниже:
//круглые скобки ('Глеб') заставляют JS выполнить функцию sayHi немедленно, прямо в этой же строке.
//delayForSecond(sayHi('Глеб'))

// Исправленный код
//Передав стрелочную функцию () => sayHi('Глеб'), мы не вызываем её сразу,
// а просто «запаковываем» вызов внутрь коробки.
delayForSecond(() => sayHi("Глеб"));
