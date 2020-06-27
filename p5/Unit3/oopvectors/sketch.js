let myCars =[] ;


function setup() {
  createCanvas(500,500);

  for (let i = 0; i < 40 ; i++) {
    cars.push(new Car()) ;
  }

}

function draw() {
  background(100) ;

  for (let i = 0; i < 40 ; i++) {
    cars[i].display();
    cars[i].update();
  }

}


 class Car {

   constructor() {
     this.pos = createVector(random(width), random(height)) ;
     this.vel = createVector(random(-3, 3), random(-3, 3)) ;
     this.clo = color(random(255), random(255), random(255)) ;
   }

   display() {
     ellipse(this.pos.x, this.pos.y, 25) ;
   }

   update() {
     this.pos.add(this.vel) ;
   }
