"use strict";

let inputCalculator = document.getElementById("inputCalculator");
//All porque são vários elementos
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const buttonEqual = document.querySelector(".btn-Equal");
const buttonZero = document.querySelector(".number0");
const buttonClear = document.querySelector(".btn-clear");
const buttonComma = document.querySelector(".comma");
//console.log(numbers);

console.log(operations);
let operationAux;
let afterNumber;
let atualNumber;

//input inicial
inputCalculator.value = "0";

//funcionalidade números no ecrã
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    //resolvido para tirar o 0 do ecrã
    inputCalculator.value === "0"
      ? (inputCalculator.value = e.target.textContent)
      : (inputCalculator.value += e.target.textContent);
    console.log(e.target.textContent);
    console.log(inputCalculator.value);
  });
}

//funcionalidade operações
for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", function (e) {
    inputCalculator.value += e.target.textContent;
    //console.log(e.target.textContent);
    //console.log(inputCalculator.value);
  });
}

const ativarEqual = function () {
  let aux = inputCalculator.value
    .replaceAll("x", "*")
    .replaceAll("÷", "/")
    .replaceAll(",", ".");

  let result = eval(aux);
  console.log(aux);

  if (result === Infinity) {
    inputCalculator.value = "Not a Number";
  } else {
    inputCalculator.value = result;
  }
};

buttonEqual.addEventListener("click", ativarEqual);

const clean = function () {
  inputCalculator.value = "0";
};

buttonClear.addEventListener("click", clean);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  //não completo, necessita de verificações, no entanto faz a funcionalidade
  //divisão não funciona com o teclado
  if (e.key === "Enter") {
    console.log(e.key);
    ativarEqual();
    console.log(ativarEqual);
  } else if (e.key === "Backspace") {
    clean();
  } else if (
    (e.key === "1",
    "2",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "x",
    "÷",
    ",")
  ) {
    inputCalculator.value === "0"
      ? (inputCalculator.value = e.key)
      : (inputCalculator.value += e.key);
  }
});
