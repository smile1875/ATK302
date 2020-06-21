function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {

  background('blue');

  // pattera
  fill('blue');
  stroke('white');

  for (let i = 0; i < width; i +=25) {
    for (let j = 0; j < height; j +=25) {
    rect(i, j, 2, 2) ;
    }
  }

   nonStroke();
  // my character
  fill('green');
  ellipse(200, 200, 200 ,200);
  fill('white');
  ellipse(170, 150, 50, 60);
  ellipse(230, 150, 50, 70);
  arc(200, 220, 170, 100, 0, PI, CHORD);
  fill('black');
  ellipse(170, 160, 20);
  ellipse(230, 120, 20);
