function descobrir() {
  var descobertas;
  var cartasPendentes;
  var totalDescobertas = document.querySelectorAll(
    ".descoberta:not(.acertada)"
  );

  if (totalDescobertas.length > 1) {
    return;
  }

  this.classList.add("descoberta");
  document
    .querySelector("#som-carta")
    .cloneNode()
    .play();

  descobertas = document.querySelectorAll(".descoberta:not(.acertada)");
  if (descobertas.length < 2) {
    return;
  }

  comparar(descobertas);
  atualizaContador();
  cartasPendentes = document.querySelectorAll(".carta:not(.acertada)");
  if (cartasPendentes.length === 0) {
    setTimeout(finalizar, 1000);
  }
}

function comparar(cartasAComparar) {
  if (
    cartasAComparar[0].dataset.valor === cartasAComparar[1].dataset.valor
  ) {
    acerto(cartasAComparar);
  } else {
    error(cartasAComparar);
  }
}
