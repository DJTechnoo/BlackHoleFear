const HEIGHT = 512;
const WIDTH = 1024;
const MAXITEMS = 500;

var hole; // player
var items = []; // test items
var canvas;
var COL; // game background
var deltaTime; // time between frames
var score;

//var images = [];


function clear2(col) {
  // homemade clear screen
  fill(color(col));
  rect(0, 0, WIDTH, HEIGHT);
}

function setup() {

  //pixelDensity(1);
  COL = color(255, 200, 150, 100);
  canvas = createCanvas(WIDTH, HEIGHT);
  background(color(COL));
  hole = new BlackHole();
  score = new Score();
  
  //images[0] = loadImage("https://art.pixilart.com/2d860785d0d81ee.png");
  //images[1] = loadImage("../Assets/girl2.png");
  //images[2] = loadImage("../Assets/girl1.png");


	for (let i = 0; i < MAXITEMS; i++)
		items.push(new Item(Math.random() * WIDTH + 0, Math.random() * HEIGHT + 0));
	hole.targetSize = 100; // make a cool spring animation in the beginning

}


function newLevel(){
	for (let i = 0; i < MAXITEMS; i++){
		items.push(new Item(Math.random() * WIDTH + 0, Math.random() * HEIGHT + 0));
		items[i].escapeLevel += 0.07;
	}
	score.level++;
	hole.targetSize = 50; // make a cool spring animation in the beginning
	
	
}

function draw() {

	
	deltaTime = (window.performance.now() - canvas._pInst._lastFrameTime)/1000;
	clear2(COL);
	hole.update(deltaTime);
	
	for(let i = items.length-1; i >= 0; i--){
		if (items[i].eaten){
			items.splice(i, 1);	
			
		}
	}
	
	
	for(let i in items)
		items[i].update(deltaTime);
	

  for (let i = 0; i < items.length; i++) items[i].update(deltaTime);
  
  
  if(items.length < 1 && !score.gameOver){
	  newLevel();
  }
  
	score.display();
  
  //image(images[0], 40, 40, 10, 10);
}
