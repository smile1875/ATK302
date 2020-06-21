function setup() {
  createCanvas(800, 800);
  textAlign(CENTER) ;
  textSize(32) ;
}

function draw() {

  ellipse(mouseX,mouseY,random(100,200),random(100,200));

  push() ;
  fill('black') ;
  text("COLORFUL SNAKE!", width/2, 700 );
  pop() ;

}

function mouseReleased(){
  fill(random(255),random(255),random(255));
  ellipse(mouseX,mouseY,random(100,200),random(100,200));

}
