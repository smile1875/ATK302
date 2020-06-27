var mic;
var vol;


function setup() {
  createCanvas(800, 800);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background('green');

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // level is between 0 and 1
  // vol = (vol * 100).toFixed(0); // you may need to change this

  if (vol > 30) {
    // do something

  }

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
