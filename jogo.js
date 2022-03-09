function jogar(){
  //Todas as funções para o jogo rodar.
  criarDivisao();
  criarBola();
  criarPlacar();
  criarRaquete();
  if (pausado === false){
    movimentoDaBola();
    colisao();
    movimentoJogador1();
    if (jogador2 === true){
        perdendoVidas2();
        movimentoJogador2();
    }else {
    movimentoRaquete2();
    fazendoPontos();
    }
    perdendoVidas1();
  }
}

function fimDeJogo(){
	if (vidasDoJogador[0] <= 0){
      fim.play();
	  vencedor = 2;
	  gameOver = true;
	  jogando = false;
	}else if (vidasDoJogador[1] <= 0){
      fim.play();
	  vencedor = 1;
	  gameOver = true;
	  jogando = false;
	}
}