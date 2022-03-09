//Vidas e pontos
let vidasDoJogador = [10, 10];
let pontos = 0;
let vencedor = 0;

function criarDivisao(){
  rect(width / 2, 0, 1, height)
}

function perdendoVidas1(){
	if (xBola < 0 + raioDaBola){
		vidasDoJogador[0] -= 1;
	}	
}

function perdendoVidas2(){
	if (xBola > width - raioDaBola){
		vidasDoJogador[1] -= 1;
	}
}

function fazendoPontos(){
	if (xBola > width - raioDaBola){
	pontos += 5;
	}
}

function criarPlacar() {
    textAlign(CENTER);
    textSize(16);
    fill(255);
    text(vidasDoJogador[0], 280, 26);
    if (jogador2 === false){
	 fill(255);
	 text(pontos, 320, 26);
    } else if (jogador2 === true){
    	fill(255);
	text(vidasDoJogador[1], 320, 26);
    }
}