function finalizar() {
  clearInterval(cronometro);
  if (nivelAtual < niveis.length - 1) {
    document.querySelector("#subirNivel").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}
