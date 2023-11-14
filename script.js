// Variáveis

var numeroSecreto = Math.floor(Math.random() * 11);
var resposta = document.getElementById("resultado");
var i = 3;

// Função de chutar

function Chutar() {
  while (i > 0) {
    var chute = parseFloat(document.getElementById("valor").value);
    if (
      chute < 0 ||
      chute > 10 ||
      isNaN(chute) ||
      Number.isInteger(chute) == false
    ) {
      resposta.innerHTML =
        "Por favor, digite um número entre 0 e 10." +
        '<br><br><img src="https://giffiles.alphacoders.com/147/14754.gif" class=gif-final>';
      return;
    } else {
      i -= 1;
      if (chute == numeroSecreto) {
        resposta.innerHTML =
          "Parabéns! Você acertou!✨✨✨" +
          '<br><br><img src="http://images5.fanpop.com/image/photos/31800000/Gravity-Falls-Gifs-gravity-falls-31887754-300-225.gif" class=gif-final>';
        return;
      } else if (chute > numeroSecreto && i > 0) {
        resposta.innerHTML =
          "Digite um número menor! ↓ " + " Suas tentativas restantes: " + i;
        return;
      } else if (chute < numeroSecreto && i > 0) {
        resposta.innerHTML =
          "Digite um número maior! ↑ " + " Suas tentativas restantes: " + i;
        return;
      }
    }
  }
  resposta.innerHTML =
    "Você perdeu! O número secreto era " +
    numeroSecreto +
    "! Tente Novamente!" +
    '<br><br><img src="https://i.pinimg.com/originals/3e/67/27/3e6727178a8350088f505b58a7ae951b.gif" class=gif-final>';
  return;
}

// Função para gerar novo número secreto

function Novatentativa() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("valor").value = "";
  numeroSecreto = Math.floor(Math.random() * 11);
  i = 3;
}
