var pic;

function setup() {
  createCanvas(400, 400);
  pic = loadImage("assets/1.jpg")
  pic = loadImage("assets/2.jpg")
  pic = loadImage("assets/3.jpg")
  imageMode(CENTER);
}

function draw() {
  background(220);
  
  image(pic,width/2,height/2);
}
