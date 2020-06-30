let state = 0;
let img1 ;
let img2 ;
let img3 ;

function setup() {
  createCanvas(511, 1080);
  img1 = loadImage("assets/1.jpg") ;
  img2 = loadImage("assets/2.jpg") ;
  img3 = loadImage("assets/3.jpg") ;
//  imageMode(CENTER) ;
}

function draw() {

  switch (state) {
    case 0:
      background('purple');
      image(img1,0,0,511,1080) ;
      text("When life is shit,turn the music up.", 100, 100);
      break;

    case 1:
      background('pink');
      image(img2,0,0,270,570) ;
      text("I believe in hate at first sight.", 100, 100);
      break;

    case 2:
      background('white');
      image(img3,0,0,270,570) ;
      text("I will tell the starts about you.", 100, 100);
      break;
  }

}

function mouseReleased() {
  state = state + 1;
  if (state > 2) {
    state = 0;

  }

}
