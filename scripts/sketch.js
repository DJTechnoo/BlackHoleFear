const H = 512;
const W = 1024;

var hole;		// player
var items = [];		// test items
var canvas;		
var COL;		// game background
var deltaTime	// time between frames

function clear2(col){	// homemade clear screen		
	
	fill(color(col));
	rect(0, 0, W, H);	
}


function setup() {
	//pixelDensity(1);
	COL = color(255, 200, 150, 100);
	canvas = createCanvas(W, H);
	background(color(COL));
	hole = new BlackHole();
	
	for(let i = 0; i < 3; i++)
		items.push(new Item((Math.random()*(W/4)+ (W/2)), (Math.random()*(H/4)+ (H/2))));
	hole.grow(50);			// make a cool spring animation in the beginning
}


function draw() {
	
	deltaTime = (window.performance.now() - canvas._pInst._lastFrameTime)/1000;
	clear2(COL);
	hole.update(deltaTime);
	
	for(let i = 0; i < 3; i++)
		items[i].update(deltaTime);
}









