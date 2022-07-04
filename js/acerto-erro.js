function acerto(asCartas) {
  asCartas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
  document.querySelector("#som-acerto").play();
}

function error(asCartas) {
  asCartas.forEach(function(elemento) {
    elemento.classList.add("error");
  });

  document.querySelector("#som-error").play();

  setTimeout(function() {
    asCartas.forEach(function(elemento) {
      elemento.classList.remove("descoberta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
