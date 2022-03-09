function setup() {
  createCanvas(600, 400);
  frameRate(60);
  stroke(255);
  bgm.loop();
  bgm.setVolume(0.05);
}

function draw() {
  background(0);
  menu();
}