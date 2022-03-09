//Parametros dos jogo
let jogando = false;
let jogador2 = false;
let gameOver = false;
let pausado = false;
let noMenu = true;
let posicao = 245;

function menu(){
  if (jogando === true && gameOver === false){
    jogar();
    fimDeJogo();
  } else if (jogando === false && gameOver === false){
  	  vidasDoJogador[0] = 10;
  	  vidasDoJogador[1] = 10;
  	  pontos = 0;
	  textSize(56);
	  textAlign(CENTER);
	  text('Pong', 300, 100);
	  textSize(16);
	  textAlign(LEFT);
	  fill(255);
	  text('1 Jogador', 250, 250);
	  fill(255);
	  text('2 Jogadores', 250, 300);
	  circle(230, posicao, diametroDaBola);
	  jogoFundo();
	}else if (gameOver === true){
		fill(255);
		textSize(56);
		textAlign(CENTER);
		text('Game Over', 300, 100);
		if (jogador2 === false){
			textSize(16);
			text('Pontos: ' + pontos, 300, 250);
		} else if (jogador2 === true){
			textSize(16);
			text('Vencedor: jogardor ' + vencedor, 300, 200);
			text('Placar: ' + vidasDoJogador1 + ' x ' + vidasDoJogador2, 300, 250);
		}
		textSize(8);
		textAlign(LEFT);
		text('ESC para voltar', 10, 10);
	}
}

function jogoFundo(){
	criarBola();
	movimentoDaBola();
	colisao();
	criarRaquete();
	movimentoRaquete1();
	movimentoRaquete2();
}