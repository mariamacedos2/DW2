const btnBotoes = document.querySelectorAll("[btn-numero]");
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]");
const btnDelete = document.querySelector("[btn-delete]");
const btnAC = document.querySelector("[btn-ac]");

const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento,
  displayTextoElemento: displayElemento,
};

btnAC.addEventListener("click", () => {
  limpaVariaveis(calculadora);
});

btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora);
});

btnIgual.addEventListener("click", () => {
  executaCalculo(calculadora);
});

btnBotoes.forEach((btn) => {
  btn.addEventListener("click", () => {
    adicionaNumero(calculadora, btn.innerText);
  });
});

btnOperacoes.forEach((btn) => {
  btn.addEventListener("click", () => {
    escolheOperador(calculadora, btn.innerText);
  });
});

/****************************************************************
 * Funções da calculadora
 ****************************************************************/
function atualizaDisplay(calc) {
  calc.displayTextoElemento.innerText = calc.operandoAtual;
  calc.bufferTextoElemento.innerText = calc.operador
    ? `${calc.operandoAnterior} ${calc.operador}`
    : "";
}

function limpaVariaveis(calc) {
  calc.operandoAnterior = "";
  calc.operandoAtual = "";
  calc.operador = "";
  atualizaDisplay(calc);
}

function adicionaNumero(calc, numero) {
  if (numero === "." && calc.operandoAtual.includes(".")) return;
  calc.operandoAtual += numero;
  atualizaDisplay(calc);
}

function escolheOperador(calc, operador) {
  if (calc.operandoAtual === "") return;

  if (calc.operandoAnterior !== "") {
    executaCalculo(calc);
  }

  calc.operador = operador;
  calc.operandoAnterior = calc.operandoAtual;
  calc.operandoAtual = "";
  atualizaDisplay(calc);
}

function executaCalculo(calc) {
  let resultado;
  const anterior = parseFloat(calc.operandoAnterior);
  const atual = parseFloat(calc.operandoAtual);
  if (isNaN(anterior) || isNaN(atual)) return;

  switch (calc.operador) {
    case "+":
      resultado = anterior + atual;
      break;
    case "-":
      resultado = anterior - atual;
      break;
    case "*":
      resultado = anterior * atual;
      break;
    case "÷":
      resultado = atual === 0 ? "Erro" : anterior / atual;
      break;
    default:
      return;
  }

  calc.operandoAtual = resultado.toString();
  calc.operador = "";
  calc.operandoAnterior = "";
  atualizaDisplay(calc);
}

function apagaDigito(calc) {
  calc.operandoAtual = calc.operandoAtual.slice(0, -1);
  atualizaDisplay(calc);
}
