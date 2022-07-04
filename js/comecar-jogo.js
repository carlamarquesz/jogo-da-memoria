// Escribimos los niveles dinámicamente
escribeNiveles();

// Asignamos eventos iniciales
document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#jogo-normal")
  .addEventListener("click", iniciaJogoNormal);
document
  .querySelector("#jogo-relax")
  .addEventListener("click", iniciaJogoRelax);

document
  .querySelector("#control-nivel")
  .addEventListener("click", mostraMenuNiveis);
document
  .querySelector("#encerra-niveis")
  .addEventListener("click", ocultaMenuNiveis);

document.querySelectorAll(".nivel").forEach(function(elemento) {
  elemento.addEventListener("click", mudaNivel);
});

document.querySelector("#subir").addEventListener("click", carregaNovoNivel);

document.querySelector("body").addEventListener("click", clickForaDoMenu);

document.addEventListener("keydown", teclaEscEncerraMenu);

//Mostramos pantalla de bienvenida
document.querySelector("#bemvindo").classList.add("visible");
