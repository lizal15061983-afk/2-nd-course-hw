// ==========================================
// 1. ИГРА: ПРОСТАЯ ВИКТОРИНА
// ==========================================
const quiz = [
  {
    question: "Какой цвет небо?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2,
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

function startQuiz() {
  let correctCount = 0;
  for (let i = 0; i < quiz.length; i++) {
    const currentItem = quiz[i];
    const message =
      currentItem.question + "\n" + currentItem.options.join("\n");
    const userAnswer = prompt(message);

    if (userAnswer === null) {
      alert("Игра прервана");
      return;
    }

    if (Number(userAnswer.trim()) === currentItem.correctAnswer) {
      correctCount++;
    }
  }
  alert(
    `Викторина окончена! Количество правильных ответов: ${correctCount} из ${quiz.length}`,
  );
}

// ==========================================
// 2. ИГРА: УГАДАЙ ЧИСЛО
// ==========================================
function guessNumberGame() {
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  let userAnswer;

  while (userAnswer !== targetNumber) {
    userAnswer = prompt("Угадай число от 1 до 100:");

    if (userAnswer === null) {
      alert("Игра окончена. Вы вышли.");
      break;
    }

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

// ==========================================
// 3. ИГРА: ПРОСТАЯ АРИФМЕТИКА
// ==========================================
function simpleArithmeticGame() {
  const operators = ["+", "-", "*", "/"];
  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];

  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;

  let correctAnswer;

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
      num1 = num1 * num2;
      correctAnswer = num1 / num2;
      break;
  }

  const userAnswer = prompt(
    `Решите задачу:\n${num1} ${randomOperator} ${num2} = ?`,
  );

  if (userAnswer === null) {
    alert("Игра окончена. Вы вышли.");
    return;
  }

  if (userAnswer.trim() !== "" && Number(userAnswer.trim()) === correctAnswer) {
    alert("Верно! Отличная работа! 🎉");
  } else {
    alert(`Ошибка. Правильный ответ: ${correctAnswer}`);
  }
}

// ==========================================
// 4. ИГРА: ПЕРЕВЕРНИ ТЕКСТ
// ==========================================
function reverseTextGame() {
  const userText = prompt("Введите текст, который хотите перевернуть:");

  if (userText === null) {
    alert("Игра окончена. Вы вышли.");
    return;
  }

  if (userText.trim() === "") {
    alert("Вы ничего не ввели!");
    return;
  }

  const reversedText = userText.split("").reverse().join("");

  alert(`Ваш перевернутый текст:\n${reversedText}`);
}

// ==========================================
// 5. ИГРА: КАМЕНЬ, НОЖНИЦЫ, БУМАГА
// ==========================================
function rockPaperScissorsGame() {
  let userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага");

  if (userChoice === null) {
    alert("Игра отменена.");
  } else {
    userChoice = userChoice.toLowerCase().trim();
    const possibleComputerMoves = ["камень", "ножницы", "бумага"];

    if (!possibleComputerMoves.includes(userChoice)) {
      alert(
        "Ошибка! Пожалуйста, введите правильное слово: камень, ножницы или бумага.",
      );
    } else {
      const randomIndex = Math.floor(
        Math.random() * possibleComputerMoves.length,
      );
      const computerChoice = possibleComputerMoves[randomIndex];

      alert(`Ваш ход: ${userChoice}\nХод компьютера: ${computerChoice}`);

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

// ==========================================
// 6. ИГРА: ГЕНЕРАТОР СЛУЧАЙНЫХ ЦВЕТОВ
// ==========================================
function getRandomHexColor() {
  const hexCharacters = "0123456789ABCDEF";
  let colorResult = "#";

  for (let i = 0; i < 6; i++) {
    colorResult += hexCharacters[Math.floor(Math.random() * 16)];
  }

  return colorResult;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();

  //  Принудительно красим body (игнорируя обычный CSS)
  document.body.style.setProperty("background-color", randomColor, "important");

  document.documentElement.style.setProperty(
    "background-color",
    randomColor,
    "important",
  );

  // Красим главный контейнер сайта, если он перекрывает body
  const mainWrapper =
    document.querySelector(".wrapper") ||
    document.querySelector(".page") ||
    document.querySelector("main");
  if (mainWrapper) {
    mainWrapper.style.setProperty("background-color", randomColor, "important");
  }

  const stubbornBlocks = document.querySelectorAll(".games-list, .games-about");

  // Перебираем их циклом и перекрашиваем каждый в тот же случайный цвет
  stubbornBlocks.forEach((block) => {
    block.style.setProperty("background-color", randomColor, "important");
  });
}
