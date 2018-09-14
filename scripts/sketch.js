var hole;

function setup() {
  createCanvas(1024, 512);
  background(color("pink"));
  hole = new BlackHole();
}

function draw() {
  hole.update();
}
