var imgEstrada;
var carros = [];
var imgVeiculos = [];
var jogador;
var imgAbertura;
var controleTela = "INICIO";



function preload(){
  imgEstrada = loadImage("jogo/imgJogo/estrada.png");
  imgVeiculos[0] = loadImage("jogo/imgJogo/carro-1.png");
  imgVeiculos[1] = loadImage("jogo/imgJogo/carro-2.png");
  imgVeiculos[2] = loadImage("jogo/imgJogo/carro-3.png");
  imgVeiculos[3] = loadImage("jogo/imgJogo/vaca.png");
  carros[0] = new Veiculo(35);
  //carros[1] = new Veiculo(90);
  //carros[2] = new Veiculo(145);
  jogador = new Jogador();
   imgAbertura = loadImage("jogo/imgJogo/abertura.gif")
}

function setup() {
  createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
  if(keyCode==13){
    controleTela = "JOGO";
  }
}

function draw(){
  if(controleTela == "INICIO"){
    mostraAbertura();
  }
  else{
    executarJogo();
  }
 

  
}

