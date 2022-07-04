var modoRelax = false;
var movimentos = 0;
var cronometro;
var grupoCartas = [
  ["🦄", "🍦"],
  ["🌈", "👽"],
  ["👾", "🤖", "👹", "👺"],
  ["🤡", "💩", "🎃", "🙀"],
  ["☠️", "👾", "😽", "😼"]
];
var nivelAtual = 0;
var niveis = [
  {
    cartas: grupoCartas[0],
    movimentosMax: 3
  },
  {
    cartas: grupoCartas[0].concat(grupoCartas[1]),
    movimentosMax: 8
  },
  {
    cartas: grupoCartas[0].concat(grupoCartas[1], grupoCartas[2]),
    movimentosMax: 12
  },
  {
    cartas: grupoCartas[0].concat(
      grupoCartas[1],
      grupoCartas[2],
      grupoCartas[3]
    ),
    movimentosMax: 25
  },
  {
    cartas: grupoCartas[0].concat(
      grupoCartas[1],
      grupoCartas[2],
      grupoCartas[3],
      grupoCartas[4]
    ),
    movimentosMax: 60
  }
];
