let palavras;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria();
     
}

function palavraAleatoria(){
   let palavras = ["CarlSagan", "AlbertEinstein", "RichardFeynman", "GalileuGalilei", "IsaacNewton"];
  return random(palavras);
}

function inicializaCores() {
  background("white");
  fill ("blue")
    textSize(60);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade =  map(mouseX, minimo, maximo, 1, palavra.length);
    let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
       
let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
    
  }
  


function dicasDeLivros(ciencias, mundo, astronomia){
  
}
