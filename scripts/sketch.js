function setup() {
  createCanvas(1024, 512);
  background(color("pink"));
}

var hole = new BlackHole();

function draw(){
	
	hole.update();
	
}