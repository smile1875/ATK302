var img1, img2, img3;

function setup() {
  createCanvas(800,800);
  imageMode(CENTER);
  img1 = loadImage("assets/expo.jpg");
  img2 = loadImage("assets/mountainside.jpg");
  img3 = loadImage("assets/vangoth.jpg");
}

function draw() {
  image(img1,400,400,200,200);
    image(img2,400,200,200,200);
    image(img3,400,600,200,200);
}
