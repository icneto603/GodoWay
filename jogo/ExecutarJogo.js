function executarJogo(){
    background(imgEstrada);
  
  jogador.mova();
  
  for(let i=0;i < carros.length;i++){
    carros[i].mova();
    if (carros[i].posX < -100){
      carros[i] =new Veiculo(carros[i].posY);
    }
    
    if (((jogador.xInicial>carros[i].xInicial) &&
         (jogador.xInicial<carros[i].xFinal) ||
       (jogador.xFinal>carros[i].xInicial) && 
        (jogador.xFinal<carros[i].xFinal))
       &&
       ((jogador.yInicial>carros[i].yInicial) && 
        (jogador.yInicial<carros[i].yFinal) ||
       (jogador.yFinal>carros[i].yInicial) && 
        (jogador.yFinal<carros[i].yFinal))) {
      jogador = new Jogador();
      tela="gameover";
    }
  }
  textSize(20);
  text("Tentativas",270,20);      
}