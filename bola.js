//Posição, diâmetro, raio e velocidade da bola.
let xBola = 300;
let yBola = 200;
let diametroDaBola = 15;
let raioDaBola = diametroDaBola/2;
let velocidadexDaBola = 5;
let velocidadeyDaBola = 5;

function criarBola(){
  //circle(posição x, posição y, diâmetro).
  circle(xBola, yBola, diametroDaBola);
}

function movimentoDaBola(){
  xBola += velocidadexDaBola
  yBola += velocidadeyDaBola
}

