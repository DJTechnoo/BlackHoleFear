const HEIGTH = 512;
const WIDTH = 1024;
const MAXITEMS = 500;

var hole; // player
var items = []; // test items
var canvas;
var COL; // game background
var deltaTime; // time between frames
var score;
var level;

//var images = [];

function clear2(col) {
  // homemade clear screen
  strokeWeight(1);
  fill(color(col));
  rect(0, 0, WIDTH - 1, HEIGTH - 1);
}

function setup() {
  //pixelDensity(1);
  frameRate(60);
  level = 0;
  COL = color(255, 200, 150, 100);
  canvas = createCanvas(WIDTH, HEIGTH);
  background(color(COL));
  hole = new BlackHole();
  score = new Score();

  //images[0] = loadImage("https://art.pixilart.com/2d860785d0d81ee.png");
  //images[1] = loadImage("../Assets/girl2.png");
  //images[2] = loadImage("../Assets/girl1.png");

  for (let i = 0; i < MAXITEMS; i++)
    items.push(new Item(Math.random() * WIDTH + 0, Math.random() * HEIGTH + 0));
  hole.targetSize = 100; // make a cool spring animation in the beginning
}

function newLevel() {
  level++;
  for (let i = 0; i < MAXITEMS; i++) {
    items.push(new Item(Math.random() * WIDTH + 0, Math.random() * HEIGTH + 0));
    items[i].escapeLevel += level / 10;
  }
  hole.targetSize = 100 - level; // make a cool spring animation in the beginning
}

function draw() {
  deltaTime = (window.performance.now() - canvas._pInst._lastFrameTime) / 1000;
  clear2(COL);
  hole.update(deltaTime);

  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i].eaten) {
      items.splice(i, 1);
    }
  }

  for (let i in items) items[i].update(deltaTime);

  for (let i = 0; i < items.length; i++) items[i].update(deltaTime);

  if (items.length < 1) {
    newLevel();
  }

  //image(images[0], 40, 40, 10, 10);
}
