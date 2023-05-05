const displayNumber1 = document.querySelector("#displayNumber1");
const displayNumber2 = document.querySelector("#displayNumber2");
const displayNumberHasil = document.querySelector("#displayNumberHasil");

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const multiplication = document.querySelector(".multiplication");
const divison = document.querySelector(".division");
const reset = document.querySelector(".button-reset");

let history = [];
let operator;

increment.addEventListener("click", function () {
  const result =
    parseInt(displayNumber1.value) + parseInt(displayNumber2.value);
  displayNumberHasil.textContent = result;
  operator = "+";
  history.push({
    number1: parseInt(displayNumber1.value),
    operator: operator,
    number2: parseInt(displayNumber2.value),
    result: result,
  });
  console.log(history);
});

decrement.addEventListener("click", function () {
  const result =
    parseInt(displayNumber1.value) - parseInt(displayNumber2.value);
  displayNumberHasil.textContent = result;
  operator = "-";
  history.push({
    number1: parseInt(displayNumber1.value),
    operator: operator,
    number2: parseInt(displayNumber2.value),
    result: result,
  });
  console.log(history);
});

multiplication.addEventListener("click", function () {
  const result =
    parseInt(displayNumber1.value) * parseInt(displayNumber2.value);
  displayNumberHasil.textContent = result;
  operator = "*";
  history.push({
    number1: parseInt(displayNumber1.value),
    operator: operator,
    number2: parseInt(displayNumber2.value),
    result: result,
  });
  console.log(history);
});

divison.addEventListener("click", function () {
  const result =
    parseInt(displayNumber1.value) / parseInt(displayNumber2.value);
  displayNumberHasil.textContent = result;
  operator = "/";
  history.push({
    number1: parseInt(displayNumber1.value),
    operator: operator,
    number2: parseInt(displayNumber2.value),
    result: result,
  });
  console.log(history);
});

function resetDisplay() {
  displayNumber1.value = "";
  displayNumber2.value = "";
  displayNumberHasil.textContent = 0;
}

reset.addEventListener("click", resetDisplay);

const buttonRiwayat = document.querySelector(".button-riwayat");
buttonRiwayat.addEventListener("click", function () {
  const historyList = document.querySelector("#historyList");
  historyList.innerHTML = "";

  // tampilkan maksimal 5 riwayat terakhir
  const maxIndex = Math.min(history.length, 5);

  for (let i = 1; i <= maxIndex; i++) {
    const historyItem = history[history.length - i];
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td1.textContent = historyItem.number1;
    td2.textContent = historyItem.operator;
    td3.textContent = historyItem.number2;
    td4.textContent = historyItem.result;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    historyList.append(tr);
  }
});
