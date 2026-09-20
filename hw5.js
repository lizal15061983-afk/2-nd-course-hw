// Домашняя работа (Функции)

// Задание 1

function getMin(a, b) {
  let minValue;

  if (a < b) {
    minValue = a;
  } else {
    minValue = b;
  }

  return minValue;
}

console.log(getMin(8, 4));
console.log(getMin(6, 6));

//Задание 2

function checkEven(n) {
  let result;

  if (n % 2 == 0) {
    result = "Число четное";
  } else {
    result = "Число нечетное";
  }

  return result;
}

console.log(checkEven(42)); // Число четное
console.log(checkEven(17)); // Число нечетное

//Задание 3

function logSquare(num) {
  let result = num * num;
  console.log(result); // только на экран
}

function getSquare(num) {
  let result = num * num;
  return result; // результат "в руки" можно испльзовать дальше
}

// Проверка
logSquare(5); // должно вывести 25  на экран

//Задание 4

function correctAge(age) {
  let message;

  // Проверка условий по очереди
  if (age < 0) {
    message = "Вы ввели неправильное значение";
  } else if (age >= 0 && age <= 12) {
    message = "Привет, друг!";
  } else {
    message = "Добро пожаловать!";
  }

  return message;
}

alert(correctAge(prompt("Сколько вам лет?"))); //взаимодействие с пользователем

// Задание 5

function multiplyNumbers(a, b) {
  //Преобразуем входные данные в числа
  let numA = Number(a);
  let numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return "Одно или оба значения не являются числом"; // Is Not a Number (Это «Не Число»?) (false или true)
  } else {
    return numA * numB;
  }
}

//Проверка

console.log(multiplyNumbers(5, 6)); // Выведет: 30 (оба числа, всё супер)
console.log(multiplyNumbers("5", "6")); // Выведет: 30 (строки превратились в числа 5 и 6)
console.log(multiplyNumbers("5", 6)); // Выведет: 30 (строки превратились в числа 5 и 6)
console.log(multiplyNumbers("пять", 6)); // Выведет: 'Одно или оба значения не являются числом'



// Задание 6

function cubeNumber() {
  let input = prompt("Введите число:");
  let n = Number(input);

  if (isNaN(n)) {
    return "Переданный параметр не является числом";
  } else {
    let cube = n * n * n;
    return `${n} в кубе равняется ${cube}`;
  }
}

// Проверяем работу функции (числа от 0 до 10??)
console.log(cubeNumber());
 

//Задание 7


function getCircleArea() {
    return 3.14 * this.radius * this.radius; // Формула площади
}

function getCirclePerimeter() {
    return 2 * 3.14 * this.radius; // Формула периметра
}



const circle1 = {
    radius: 5, //рандомно(можно любое число)
    getArea: getCircleArea,          
    getPerimeter: getCirclePerimeter
};

const circle2 = {
    radius: 2, // Здесь тоже любое число
    getArea: getCircleArea,          
    getPerimeter: getCirclePerimeter 
};


console.log(circle1.getArea());      // Посчитает для радиуса 5
console.log(circle2.getArea());      // Автоматически посчитает для радиуса 2
