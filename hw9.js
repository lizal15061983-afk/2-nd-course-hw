//Задание 1
//  Находим элементы на странице с помощью querySelector
const title = document.querySelector(".title");
const button = document.querySelector(".toggle-btn");

//  Вешаем слушатель события клика на кнопку
button.addEventListener("click", () => {
  //  Проверяем, скрыт ли заголовок сейчас
  if (title.style.display === "none") {
    title.style.display = "block"; // Показываем текст обратно
    button.textContent = "Скрыть"; // Меняем текст на кнопке
  } else {
    title.style.display = "none"; // Скрываем текст
    button.textContent = "Показать"; // Меняем текст на кнопке, чтобы было понятно
  }
});

// Задание 2
//  Находим новый абзац и новую кнопку
const paragraph = document.querySelector(".text-paragraph");
const colorButton = document.querySelector(".color-btn");

// Вешаем событие клика на вторую кнопку
colorButton.addEventListener("click", () => {
  // Меняем цвет текста абзаца на синий (blue)
  paragraph.style.color = "blue";
});

// Задание 3
//  Находим новый заголовок и третью кнопку
const dynamicTitle = document.querySelector(".dynamic-title");
const textButton = document.querySelector(".text-btn");

// Вешаем событие клика на третью кнопку
textButton.addEventListener("click", () => {
  // Меняем текст заголовка на «Привет, мир!»
  dynamicTitle.textContent = "Привет, мир!";
});

//Задание 4

// Шаг 1. Находим ВСЕ элементы с классом description
const descriptions = document.querySelectorAll(".product-card .description");

// Шаг 2. Перебираем их циклом forEach и меняем текстовое содержимое каждого
descriptions.forEach((element) => {
  element.textContent = "Измененный текст";
});

// Задание 5
//Обернула  в div описание рараграфов в 4 и 5 задании (иначе применится к description в 4 задании)

// Находим абзацы description.
const taskDescriptions = document.querySelectorAll(".task-box .description");

// Перебираем их и меняем текст на «Новый текст»
taskDescriptions.forEach((element) => {
  element.textContent = "Новый текст";
});

// Задание 6
//  Создаем кнопку и добавляем новый абзац p при клике
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Новый абзац";
  document.body.appendChild(newParagraph);
});

//Задание 7

//  Ищем кнопку удаления по её классу
const deleteBtn = document.querySelector(".delete-btn");

// Вешаем событие клика
deleteBtn.addEventListener("click", () => {
  //  Находим ПЕРВЫЙ абзац с классом .description, который лежит внутри .text-box
  const firstDescription = document.querySelector(".text-box .description");

  //  Если он найден — удаляем его
  if (firstDescription) {
    firstDescription.remove();
  }
});
