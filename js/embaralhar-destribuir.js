function embaralharCartas(lasTarjetas) {
  var resultado;
  var totalCartas = lasTarjetas.concat(lasTarjetas);
  resultado = totalCartas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function destribuirCartas(lasTarjetas) {
  var mesa = document.querySelector("#mesa");
  var cartasEmbaralhadas = embaralharCartas(lasTarjetas);
  mesa.innerHTML = "";

  cartasEmbaralhadas.forEach(function(elemento) {
    var carta = document.createElement("div");

    carta.innerHTML =
      "<div class='carta' data-valor= " +
      elemento +
      ">" +
      "<div class='carta__conteudo'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(carta);
  });
}
