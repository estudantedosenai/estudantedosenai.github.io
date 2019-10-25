function setup() {
  createCanvas(600, 400);
  trilha.setVolume(0.2);
  trilha.loop();
}

function draw() {
  if(frameCount > 400){ // +/- 8s
    if(placarVaca < 5 && placarTouro < 5){
      jogar();
      console.log("Vaca: " +  placarVaca + " Touro: " + placarTouro);
    }else
      verificaVencedor();
  }else{    
    telaInicial();
  }
}

function verificaVencedor(){
  if(placarVaca >= 5)
    vacaVencedora(); //Tela Final
  else
    touroVencedor(); // Tela Final
}


function vacaVencedora(){
  background("Crimson");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Chartreuse");
  textSize(48);
  text("Vacinha Venceu", 200, 90);
  image(imgVaca, 200, 100, 200, 200);  
}

function touroVencedor(){
  background("DarkOrchid");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("DarkOrange");
  textSize(48);
  text("Tourino Venceu", 200, 90);
  image(imgTouro, 200, 100, 200, 200);  
}

function telaInicial(){
  background("Chartreuse");
  textStyle(BOLD);
  textAlign(CENTER);
  fill("Chocolate");
  textSize(48);
  text("You Don't Know The Way", 300, 190);
  textSize(24);
  text("Desenvolvido por GuSsAnO", 300, 230);  
}

function jogar(){
  background(imgEstrada);
  mostraCarros();
  mostraVaca();
  movimentaCarros();
  movimentaVaca();  
  atropelamento();
  mostraPlacar();
}
