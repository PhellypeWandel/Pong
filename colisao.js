function colisao(){
  //Lados
  let baseDaBola = yBola + raioDaBola;
  let direitaDaBola = xBola + raioDaBola;
  let esquerdaDaBola = xBola - raioDaBola;
  let topoDaBola = yBola - raioDaBola;
  let frenteDaRaquete1 = xRaquete[0] + larguraDaRaquete;
  let frenteDaRaquete2 = xRaquete[1];
  let baseDaRaquete1 = yRaquete[0] + alturaDaRaquete;
  let topoDaRaquete1 = yRaquete[0]
  let baseDaRaquete2 = yRaquete[1] + alturaDaRaquete;
  let topoDaRaquete2 = yRaquete[1]
  
  //Colisão com as paredes
  if (esquerdaDaBola <= 0 && velocidadexDaBola < 0){
    velocidadexDaBola *= -1
    hitPonto.play();
  }
  if (direitaDaBola >= width && velocidadexDaBola > 0){
    velocidadexDaBola *= -1
    hitPonto.play();
  }
  if (topoDaBola <= 0 && velocidadeyDaBola < 0){
    velocidadeyDaBola *= -1
    hit.play();
  }
  if (baseDaBola >= height && velocidadeyDaBola > 0){
    velocidadeyDaBola *= -1
    hit.play();
  }
  
  //Colisão com a raquete 1
  if (esquerdaDaBola <= frenteDaRaquete1 && yBola <= baseDaRaquete1 && yBola >= topoDaRaquete1 && velocidadexDaBola < 0){
    velocidadexDaBola *= -1;
    hit.play();
    if (jogando === true && velocidadexDaBola <= 10 && velocidadeyDaBola <= 10) {
      velocidadexDaBola += 0.1;
      velocidadeyDaBola += 0.1;
    }
  }
  
  //Colisão com a raquete 2
  if (direitaDaBola >= frenteDaRaquete2 && yBola <= baseDaRaquete2 && yBola >= topoDaRaquete2 && velocidadexDaBola > 0){
    velocidadexDaBola *= -1
    hit.play();
    if (jogando === true && velocidadexDaBola <= 10 && velocidadeyDaBola <= 10){
      velocidadexDaBola += -0.1;
      velocidadeyDaBola += -0.1;
    }
  }
}