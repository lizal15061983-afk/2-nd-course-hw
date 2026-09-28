const quiz = [
  {
    question: "Какой цвет небо?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2, // номер правильного ответа
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2,
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2,
  },
];

// создаю функцию с именем startQuiz. Это как коробка, внутри которой лежит вся логика игры
// создаем переменную счетчик - correctCount и ставим ей стартовое значение 0
//Каждый раз, когда пользователь ответит правильно,  прибавляется  единица
//Использую let, потому что это значение будет меняться в процессе игры
//завожу индекс i (счетчик цикла)
//цикл будет работать, пока i меньше, чем длина массива (конкретно здесь 3 )
//На каждом шаге цикла берем текущий вопрос из массива quiz по его индексу и сохраняем его в константу currentItem

function startQuiz() {
  let correctCount = 0;
  for (let i = 0; i < quiz.length; i++) {
    const currentItem = quiz[i];

    // Формируем текст вопроса и вариантов ответов
    // Склеивается текст,который покажется пользователю
    //currentItem.question — берет строку с текстом вопроса
    //"\n" — это спецсимвол переноса строки
    //currentItem.options.join("\n") — берет массив вариантов ответов
    //с помощью метода .join("\n") превращает его в одну сплошную строку, где каждый вариант тоже разделен переносом строки \n.

    const message =
      currentItem.question + "\n" + currentItem.options.join("\n");

    // Запрашиваем ответ у пользователя
    const userAnswer = prompt(message);

    // Если пользователь нажал «Отмена», прерываем игру
    if (userAnswer === null) {
      alert("Игра прервана");
      return;
    }

    // Проверяем ответ и увеличиваем счетчик, если он верный
    //userAnswer.trim() — метод .trim() убирает случайные пробелы
    //currentItem.correctAnswer — строго сравниваем полученное число с правильным ответом

    if (Number(userAnswer.trim()) === currentItem.correctAnswer) {
      correctCount++;
    }
  }

  // Выводим количество правильных ответов в конце игры
  alert(
    `Викторина окончена! Количество правильных ответов: ${correctCount} из ${quiz.length}`,
  );
}

// Игра - Угадай число

function guessNumberGame() {
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  let userAnswer;

  while (userAnswer !== targetNumber) {
    userAnswer = prompt("Угадай число от 1 до 100:");

    // Если нажали "Отмена"
    if (userAnswer === null) {
      alert("Игра окончена. Вы вышли.");
      break;
    }

    // Превращаем в число и убираем пробелы (как в викторине!)
    const parsedAnswer = Number(userAnswer.trim());

    if (isNaN(parsedAnswer) || userAnswer.trim() === "") {
      alert("Пожалуйста, введите корректное число.");
      continue;
    }

    if (parsedAnswer < targetNumber) {
      alert("Загаданное число больше.");
    } else if (parsedAnswer > targetNumber) {
      alert("Загаданное число меньше.");
    } else {
      alert("Поздравляем! Вы угадали число!");
      break;
    }
  }
}

// Игра - Простая арифметика

function simpleArithmeticGame() {
  //  Создаем массив с доступными математическими операциями
  const operators = ["+", "-", "*", "/"];
  // Выбираем случайный знак из массива с помощью Math.random
  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];

  // Генерируем два случайных числа от 1 до 10
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;

  // Переменная для хранения правильного ответа компьютера
  let correctAnswer;

  // Вычисляем правильный ответ в зависимости от знака
  switch (randomOperator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    case "/":
      // Чтобы деление было красивым и без дробных хвостов:
      num1 = num1 * num2;
      correctAnswer = num1 / num2; //чтобы num1 нацело делилось на num2
      break;
  }

  const userAnswer = prompt(
    `Решите задачу:\n${num1} ${randomOperator} ${num2} = ?`,
  );

  // Если пользователь нажал "Отмена"
  if (userAnswer === null) {
    alert("Игра окончена. Вы вышли.");
    return;
  }

  //  Проверяем ответ (удаляем пробелы и переводим в число)
  if (userAnswer.trim() !== "" && Number(userAnswer.trim()) === correctAnswer) {
    alert("Верно! Отличная работа! 🎉");
  } else {
    alert(`Ошибка. Правильный ответ: ${correctAnswer}`);
  }
}
// Игра - Переверни текст

function reverseTextGame() {
  // Сайт запрашивает у пользователя текст
  const userText = prompt("Введите текст, который хотите перевернуть:");

  // Если пользователь нажал "Отмена"
  if (userText === null) {
    alert("Игра окончена. Вы вышли.");
    return;
  }

  // Проверяем, не ввели ли пустую строку
  if (userText.trim() === "") {
    alert("Вы ничего не ввели!");
    return;
  }

  // переворачивается введенный текст
  const reversedText = userText
    .split("") // Разбиваем строку на массив букв
    .reverse() // Переворачиваем массив задом наперед
    .join(""); // Склеиваем буквы обратно в одну строку

  // выводится перевернутый текст
  alert(`Ваш перевернутый текст:\n${reversedText}`);
}

//  Игра - Камень, Ножницы, Бумага

function rockPaperScissorsGame() {
  let userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага");
  // Если позьзователь ввел отмена
  if (userChoice === null) {
    alert("Игра отменена.");
  } else {
    // Приводим к общему регистру
    userChoice = userChoice.toLowerCase().trim();

    // Сгенерируем  возможные ходы компьютера
    // Создаем массив в котором содержится камень ножницы бумага
    const possibleComputerMoves = ["камень", "ножницы", "бумага"];

    // Проверяем, корректно ли ввел данные пользователь
    if (!possibleComputerMoves.includes(userChoice)) {
      alert(
        "Ошибка! Пожалуйста, введите правильное слово: камень, ножницы или бумага.",
      );
    } else {
      // Используем функцию для генерации случайного индекса
      const randomIndex = Math.floor(
        Math.random() * possibleComputerMoves.length,
      );

      // Выбираем вариант для компьютера из массива по случайному индексу
      const computerChoice = possibleComputerMoves[randomIndex];

      // Выводим выборы пользователя и компьютера на экран
      alert(`Ваш ход: ${userChoice}\nХод компьютера: ${computerChoice}`);

      // Определяем победителя и сообщаем результат игры
      if (userChoice === computerChoice) {
        alert("Результат игры: ничья.");
      } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
      ) {
        alert("Результат игры: победа!");
      } else {
        alert("Результат игры: поражение.");
      }
    }
  }
}
