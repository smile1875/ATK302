let state = 0 ;
let i1, i2 ;
let s1, s2 ;
let mic;
let vol;
let timer = 0 ;
let y = 400 ;

function setup() {
  createCanvas(400, 400);


  i1 = loadImage("assets/bird.png") ;
  i2 = loadImage("assets/pi.png") ;

  // s1 = loadSound("assets/justinBieber.mp3") ;
  // s2 = loadSound("assets/bachCelloConcerto.mp3") ;

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();

}



function draw() {

  background(100);
  vol = mic.getLevel(); // level is between 0 and 1



  switch (state) {

    case 0:
      image(i1, 0, 0, 400, 300) ;
      image(i2, 100, 100, 100, 100) ;
      text("Hello These are my birds and my pi", 100, 100);
      break;

    case 1:
      background('yellow') ;
      text("1", 100, 100);
      text(vol.toFixed(2), 100, 120) ;

      if (vol > .3) {
        // do something
        state = 2 ;
      }

      break;

    case 2:
      background('green') ;
      text("2", 100, 100);
      ellipse(100, y, 100, 100) ;
      y = y - 1 ;
      if (y < 0) {
        state = 3 ;
      }
      break;

      case 3:
        background('pink') ;
        text("You won!!!", 100, 100);
        timer = timer + 1
        if (timer > 100) {
          state = 0 ;
          timer = 0 ;
        }
        break;

  }
}

function mouseReleased() {
  state++;
  if (state > 3) state = 0;

}
