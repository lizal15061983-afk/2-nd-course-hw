//Задание 1

let a = 10;
alert(a);

a = 20;
alert(a);

//Задание 2
//Год выпуска первого айфона

const  iphoneReLeaseYear = 2007;
alert(iphoneReLeaseYear);

//Задание 3

const jsCreator = "Brendan Eich";
alert(jsCreator);

//Задание 4

let b = 10;
let c = 2;

 alert(b+c);
 alert(b-c);
 alert(b*c);
 alert(b/c);

 //Задание 5
 // Возвожу в степень

 let result = 2 ** 5;
 alert(result);

 //Задание 6
 //Находим остаток от деления

 a = 9;
 b = 2;
 alert(a % b);

 //Задание 7

 let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8

let age = prompt('Сколько вам лет?');
alert(age);

//Задание 9

const user = {
    name: 'Анна',
    age: 18,
    isAdmin: true
};
 //Задание 10 

 //Запрос имени пользователя
 let userName = prompt('Как ваше имя?');
 alert(`Привет, ${userName}!`);

 //Дополнительное задание

 //Просим пользователя загадать число
  let secretNumber = Number(prompt(`Загадай любое число`));

 //Удваиваем загаданное число
 let step = secretNumber * 2;
 alert(step);

 //К удвоенному числу  прибавляем 10
 let step2 = step + 10;
 alert(step2);

 //Полученное число делим на 2
 let step3 = step2 / 2;
 alert(step3);

 //из результата вычитаем первоначальное число
 let step4 = step3 - secretNumber;
 alert(step4);

 //Сообщаем финальный результат(всегда равен 5)
 alert("Ответ равен 5");