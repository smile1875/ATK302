var cars = []; // an array for the objects
var sculpture = [];
var frogPos;
var state = -1;
var timer = 0;
let song1, song2, song3;
let whichSculpture = 0;
let img2 ;
let img4 ;
let imggameover ;

function preload() {
  song1 = loadSound("assets/m1.mp3");
  song2 = loadSound("assets/m2.mp3");
  song3 = loadSound("assets/m3.mp3");
  song1.loop();
  song1.loop();
  song1.loop();
  song1.pause();
  song2.pause();
  song3.pause();


}


function setup() {

//  createCanvas(windowWidth, windowHeight);
createCanvas(1024, 768) ;
  img2 = loadImage("assets/2.jpeg") ;
  img4 = loadImage("assets/4.png") ;
  imggameover = loadImage("assets/gameover.jpeg") ;

  sculpture[0] = loadImage("assets/1.png");
  sculpture[1] = loadImage("assets/3.png");
  sculpture[2] = loadImage("assets/5.png");



  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car()); // put the objects onto the cars array
  }



  frogPos = createVector(width / 2, height - 120);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);


}


function draw() {

  switch (state) {

    case -1:
      song1.play();
    //  whichSculpture = floor(random(sculpture.length));
      state = 0;
      break;

    case 0:
      background('white'); // put image here
      image(img2,width/2,height/2,width,height) ;
      fill('pink');
      text("welcome to my game!", 200, 200);
      text("YAY", 100, 200);
      break;

    case 1: //game state
      game();
      timer++;
      if (timer > 600) {
        state = 3;
        timer = 0;
      }
      break;

    case 2:
      background('white');
      image(img4,width/2,height/2,width,height) ; // put image here
      fill('black');
      text("You won!!!", 200, 200);
      break;

    case 3:
      background('blue'); // put image here
      image(imggameover,width/2,height/2,width,height) ;
      fill('black');
      text("Sorry,you are lost,try again!", 200, 200);
      break;

  }
}

function reset() {
  cars = [];
  timer = 0;
  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car()); // put the objects onto the cars array
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

      case 1:
      whichSculpture++ ;
      if (whichSculpture > sculpture.length-1) whichSculpture = 0;
      break;

    case 2: // win
      reset();
      state = 0; // go back to welcome
      break;

    case 3: // lose
      reset();
      state = 0; //go back to welcome
      break;


  }

}


function game() {
  background('white');
  // image ...

  // iterate through the array, display them, update them
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].update();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1); //delate a car
    }
  }

  // check if therenare any cars left
  if (cars.length == 0) {
    state = 2; //go to win state}
  }


  // draw a "frog" here
  //  fill('green') ;
  //  ellipse(frogPos.x, frogPos.y, 70, 70) ;
  image(sculpture[whichSculpture], frogPos.x, frogPos.y, 100,100);

  //    checkForKeys() ;

  frogPos.x = mouseX;
  frogPos.y = mouseY;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}



// this is the Car class!
class Car {
  constructor() {
    // attributes
    this.pos = createVector(width / 2, height / 2); // where it starts
    this.vel = createVector(random(-3, 3), random(-3, 3)); // direction
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);

  }

  // methods

  display() { // this displays the object
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 30, 30);
    // image(img1, this.pos.x, this.pos.y, 100, 100) ;
  }

  update() { // this moves the object
    this.pos.add(this.vel); // add the velocity to the position

    // loop the objects around the screen
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
