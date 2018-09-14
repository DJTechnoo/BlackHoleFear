const H = 512;
const W = 1024;

var hole;
var item;

function clear2(col){
	
	fill(color(col));
	rect(0, 0, W, H);
	
}

function setup() {
	pixelDensity(1);
	createCanvas(W, H);
	background(color("pink"));
	hole = new BlackHole();
	item = new Item();
}

function draw() {
	clear2("pink");
	hole.update();
	item.update();
}
