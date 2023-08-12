const perguntas = [
  {
    pergunta: "Em javascript qual das sequências é utiliza para comentar?",
    opcao: [
      "1. '/* */ ou //'",
      "2. '<!-- -->'",
      "3. '%# %#'",
      "4. '! -- !'"
    ],
    resposta: "1. '/* */ ou //'",
  },
  {
    pergunta: "Num Arrays podem ser armazenados?.",
    opcao: [
      "1. Números e strings",
      "2. outro arrays",
      "3. booleans",
      "4. todos alistados",
    ],
    resposta: "4. todos alistados",
  },
  {
    pergunta:
      "É possivel depurar o seguinte códico:\n const ex; \n ex=123;",
    opcao: ["1. sim", "2. Não", "3. apenas dentro de uma função", "4. dentro de um objecto"],
    resposta: "2. Não",
  },
  {
    pergunta:
      "Qual é o comando mas usado em javascript quando se está a programar para fazer a impresssão?",
    opcao: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. loops",
      "4. console.log",
    ],
    resposta: "4. console.log",
  },
  {
    pergunta:
      "Qual a palavra reservada que é usada para terminar um cliclo switch?",
    opcao: ["1. break", "2. stop", "3. else", "4. exit"],
    resposta: "1. break",
  },
],
  inicio = document.getElementById("inicio"),
  fim = document.getElementById("fim"),
  caixa = document.getElementById("caixa"),
  nada = document.getElementById("caixa"),
  audio = document.
    getElementById("audio"),
  audio1 = document.
    getElementById("audio1"),
  resultado = document.getElementById("resultado"),
  h2 = document.getElementById("pergunta-caixa"),
  resultadotext = document.getElementById("resultado-text");
document.querySelector("time").innerText = perguntas.length * 10
function esconder() {
  inicio.setAttribute("hidden", true)
  caixa.setAttribute("hidden", true)
  fim.style.display = "none";
}
function esconderResul() {
  resultado.style.display = "none"
}
document.getElementById("bt-inicio").addEventListener("click", () => {
  audio.play()
  pt = 0
  tempo = perguntas.length * 10
  indice = 0
  inicio.setAttribute("hidden", true)
  caixa.removeAttribute("hidden")
  tabuleiro()
  tempIntervalo = setInterval(() => {
    tempo--
    escreverTemp()
    if (tempo < 1) {
      audio.pause()
      audio1.play()
      fimQuiz()
    }
  }, 1000)
  setInterval(() => {
    escreverpt()
  }, 100)
  escreverTemp()
  escreverpt()
})
function escreverpt() {
  document.getElementById("pt").innerText = pt
}
function escreverTemp() {
  document.querySelector("time").innerText = tempo
}
function tabuleiro() {
  let perg = perguntas[indice];
  h2.innerText = perg.pergunta
  opcao = perg.opcao
  for (let i in opcao) {
    opcoes = document.getElementById("opcao" + i).innerText = opcao[i]
  }

}
function correta(opcoes) {
  return opcoes.innerText === perguntas[indice].resposta
}
document.getElementById("opcoes").addEventListener("click", verificar)

function verificar(d) {
  opcoes = d.target
  resultado.style.display = "block"

  if (correta(opcoes)) {
    resultadotext.innerText = "correto"
    pt = pt + 10
    setTimeout(esconderResul, 1000)
  }
  else {
    resultadotext.innerText = "Incorreto"
    setTimeout(esconderResul, 1000)
    pt = (pt >= 10) ? pt - 10 : 0
    if (tempo >= 10) {
      tempo = tempo - 10;
      escreverTemp();
    } else {
      tempo = 0
      escreverTemp()
      fimQuiz()
    }
  }
  indice++
  if (indice < perguntas.length) {
    tabuleiro()
  }
  else {
    fimQuiz()
  }
}
function fimQuiz() {
  clearInterval(tempIntervalo)
  esconder()
  fim.style.display = "grid";
  audio.pause()

}
