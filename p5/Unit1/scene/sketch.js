function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(100) ;
  // put your shapes here!
  background(400);
  noStroke();

  fill(204);
  triangle(20, 40, 18, 380, 80, 360);

  fill(102);
  rect(81, 81, 63, 63);

  fill(204);
  quad(300, 18, 270, 18, 400, 360, 220, 223);

  fill(300);
  ellipse(252, 144, 72, 72);

  fill(204);
  triangle(388, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);

  text(mouseX + " , " + mouseY, 10, 20) ;  // this helps know where the mouse is
}



function mouseReleased() {
  // if you click the mouse, you'll see the location in the debugging console
  print(mouseX + " , " + mouseY) ;
}
