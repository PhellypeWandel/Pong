//Largura, altura e centro da raquete.
let larguraDaRaquete = 5;
let alturaDaRaquete = 70;
let centroDaRaquete = alturaDaRaquete/2;

//Posição da raquete
let xRaquete = [10, 585]; 
let yRaquete = [200 - centroDaRaquete, 200 - centroDaRaquete];

function criarRaquete(){
  //retângulo(posição x, posição y, largura, altura)
  rect(xRaquete[0], yRaquete[0], larguraDaRaquete, alturaDaRaquete, 10);
  rect(xRaquete[1], yRaquete[1], larguraDaRaquete, alturaDaRaquete, 10);
}

function movimentoJogador1(){
  if (jogador2 === false){
    if ((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && yRaquete[0] <= height - alturaDaRaquete){
      yRaquete[0] += 10;
    }
    if ((keyIsDown(UP_ARROW) || keyIsDown(87)) && yRaquete[0] >= 0){
      yRaquete[0] += -10;
    }
  } else if (jogador2 === true){
      if (keyIsDown(83) && yRaquete[0] <= height - alturaDaRaquete){
      yRaquete[0] += 15;
    }
    if (keyIsDown(87) && yRaquete[0] >= 0){
      yRaquete[0] += -15;
    }
  }
}

function movimentoJogador2(){
  if (keyIsDown(DOWN_ARROW) && yRaquete[1] <= height - alturaDaRaquete){
        yRaquete[1] += 15;
  }
  if (keyIsDown(UP_ARROW) && yRaquete[1] >= 0){
        yRaquete[1] += -15;
  }
}

function movimentoRaquete1(){
      if (yBola > yRaquete[0] + centroDaRaquete && yRaquete[0] <= height - alturaDaRaquete && xBola <= 400){
        yRaquete[0] += 5;
      }
      if (yBola < yRaquete[0] + centroDaRaquete && yRaquete[0] > 0){
        yRaquete[0] -= 5;
      }
}

function movimentoRaquete2(){
    if (yBola > yRaquete[1] + centroDaRaquete && yRaquete[1] <= height - alturaDaRaquete && xBola >= 200){
      yRaquete[1] += 5;
    }
    if (yBola < yRaquete[1] + centroDaRaquete && yRaquete[1] > 0){
      yRaquete[1] -= 5;
    }
}

