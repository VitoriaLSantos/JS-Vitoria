function setup() {
  createCanvas(900, 600);//cria uma página em branco 
  background("skyblue");//muda a cor do fundo
}

function draw() {
  stroke("black");
  
  fill("pink");

  if(mouseIsPressed){
    rect(mouseX,mouseY,10,20);//desenha um retângulo(posição X, posição Y, largura, altura)
  }
}
