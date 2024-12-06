function mostrarResultado(resultado) {
    res = document.getElementById("resultadoValor")
    res.innerText = resultado;
}

function somar(a, b) {
  resultado = a + b;
  mostrarResultado(resultado);
}

function subtrair(a, b) {
  resultado = a - b;
  mostrarResultado(resultado);
}

function multiplicar(a, b) {
  resultado = a * b;
  mostrarResultado(resultado);
}

function dividir(a, b) {
    if(b == 0){
        console.error("Erro: Não é possível dividir por 0");
    }
    else{
        resultado = a / b;
    }
  mostrarResultado(resultado);
}

function elevarAoQuadrado(a) {
  resultado = Math.pow(a, 2);
  mostrarResultado(resultado);
}

function bloquearInput2() {
  document.getElementById("operacoes").addEventListener("change", function () {
    const operacaoSelecionada = this.value;
    const input2 = document.getElementById("valor2");

    if (operacaoSelecionada === "elevar2") {
      input2.setAttribute("disabled", true);
      input2.value = "";
    } else {
      input2.removeAttribute("disabled");
    }
  });
}

function fazerOperacao() {
  const valor1Check = document.getElementById("valor1");
  const valor2Check = document.getElementById("valor2");
  const operacaoCheck = document.getElementById("operacoes");

  if (!valor1Check || !valor2Check || !operacaoCheck) {
    console.error("Erro: Um ou mais elementos não foram encontrados no DOM.");
    return;
  }

  let v1 = parseInt(valor1Check.value);
  let v2 = parseInt(valor2Check.value);
  let operacaoSelecionada = operacaoCheck.value;

  if (isNaN(v1) || (isNaN(v2) && operacaoSelecionada != "elevar2")) {
    console.error("Insira um valor válido!");
    return;
  }

  switch (operacaoSelecionada) {
    case "somar":
      somar(v1, v2);
      break;
    case "subtrair":
      subtrair(v1, v2);
      break;

    case "dividir":
      dividir(v1, v2);
      break;

    case "multiplicar":
      multiplicar(v1, v2);
      break;

    case "elevar2":
      elevarAoQuadrado(v1);
  }
}

window.onload = bloquearInput2;
