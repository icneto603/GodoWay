class Jogador{
    constructor(){
      this.imagem = loadImage("jogo/imgJogo/hamster.png");
      this.posX = 200;
      this.posY = 300;
      this.velocidade = 5;
      this.largura = 30;
      this.altura = 50;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX+this.largura;
    }
    
    mova(){
      image(imgTela[0],this.posX, this.posY);
      
      if((keyIsDown(38)) && (this.yInicial>0)){
        this.posY -= this.velocidade;
      }
      if((keyIsDown(40) && (this.yFinal<400))){
        this.posY += this.velocidade;
      }
      if((keyIsDown(39)) && (this.xFinal<600)){
        this.posX += this.velocidade;
      }
      if((keyIsDown(37)) && (this.xInicial>0)){
        this.posX -= this.velocidade;
      }
      
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
      
    }
  }