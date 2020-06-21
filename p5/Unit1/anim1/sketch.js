var x = 0 ;

function setup() {
  createCanvas(400,400)；
}

function draw() {
  background(100);
//  rect(x, 200, 50, 50);
  textSize(100) ;
  text("hello world", x, 200) ;
  x = x + 10 ;

  if (x > width); {
  x = 0;
  }
}
