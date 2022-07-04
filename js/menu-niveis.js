function escribeNiveles() {
  var menuNiveis = document.querySelector(".seleciona-nivel ul");
  niveis.forEach(function(elemento, indice) {
    var controlNivel = document.createElement("li");
    controlNivel.innerHTML =
      "<button class='nivel' data-nivel=" +
      indice +
      ">Nivel " +
      (indice + 1) +
      "</button>";
    menuNiveis.appendChild(controlNivel);
  });
}

function mudaNivel() {
  var nivel = parseInt(this.dataset.nivel);
  nivelAtual = nivel;
  atualizaNivel();
  iniciar();
}

function mostraMenuNiveis(evento) {
  evento.stopPropagation();
  document.querySelector(".seleciona-nivel").classList.toggle("visible");
}

function ocultaMenuNiveis() {
  document.querySelector(".seleciona-nivel").classList.remove("visible");
}

function clickForaDoMenu(evento) {
  if (evento.target.closest(".seleciona-nivel")) {
    return;
  }
  document.querySelector(".seleciona-nivel").classList.remove("visible");
}

function teclaEscEncerraMenu(evento) {
  console.log(evento.key);
  if (evento.key === "Escape") {
    ocultaMenuNiveis();
  }
}
