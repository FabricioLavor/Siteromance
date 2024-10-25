// Função para mover o botão "Nem pensar!"
function fuja() {
  var botaoNao = document.getElementById("nao");

  // Medidas da janela e do botão
  var larguraJanela = window.innerWidth;
  var alturaJanela = window.innerHeight;
  var maxX = larguraJanela - botaoNao.offsetWidth - 20;
  var maxY = alturaJanela - botaoNao.offsetHeight - 20;

  // Posição aleatória, considerando bordas de segurança
  var aleatorioX = Math.floor(Math.random() * maxX);
  var aleatorioY = Math.floor(Math.random() * maxY);

  // Ajustando posições
  botaoNao.style.position = "absolute";
  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top = aleatorioY + "px";
}

// Função para redirecionar após o alerta
function redirectToVideo() {
  alert("Parabéns, amor! Você e eu somos um só.");
  window.location.href = "https://www.youtube.com/watch?v=lJBcZHzgD7s";
}
