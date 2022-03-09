function keyPressed(){
  //Pausar o jogo
  if (keyCode === ENTER && pausado === false && jogando === true){
    pausado = true;
    click.play();
  } else if (keyCode === ENTER && pausado === true && jogando === true){
      pausado = false;
      click.play();
  }
  //Iniciar o jogo
  if (keyCode === ENTER && jogando === false && noMenu === true) {
    click.play();
    xBola = 300;
    yBola = 200;
    yRaquete1 = 200 - centroDaRaquete;
    yRaquete2 = 200 - centroDaRaquete;
    jogando = true;
    noMenu = false;
  }
  //Sair do jogo
  if (keyCode === ESCAPE && noMenu === false) {
    click.play();
    xBola = 300;
    yBola = 200;
    yRaquete1 = 200 - centroDaRaquete;
    yRaquete2 = 200 - centroDaRaquete;
    velocidadexDaBola = 5;
    velocidadeyDaBola = 5;
    jogador2 = false;
    posicao = 245;
    jogando = false;
    gameOver = false;
    noMenu = true;
    pausado = false;
  }
  //escolher entre 1 ou 2 jogadores
  if (keyCode === DOWN_ARROW && jogador2 == false && noMenu === true) {
    select.play();
   	jogador2 = true;
   	posicao = 295;
  }
  if (keyCode === UP_ARROW && jogador2 == true && noMenu === true) {
    select.play();
    jogador2 = false;
    posicao = 245;
  }
  if (keyCode === 77 && bgm.isLooping()){
      bgm.pause();
    } else if (keyCode === 77 && bgm.isPaused()){
      bgm.play();
    }
}