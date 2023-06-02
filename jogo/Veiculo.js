class Veiculo{
    constructor(parametroY){
      this.imagem = imgVeiculos[int(random(0,3.9))];
      this.posX = 700;
      this.posY = parametroY;
      this.velocidade = random(5,10);
      this.largura = 100;
      this.altura = 50;
      
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX+this.largura;
    }
    
    mova(){
      this.posX -= this.velocidade;
      image(this.imagem,this.posX,this.posY, this.largura, this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX+this.largura;
    }
  }