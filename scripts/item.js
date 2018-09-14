function Item() {
	this.s = 10;		// size
	this.pos = createVector(400, 400);
	this.vel = createVector(0, 1);

  this.update = function() {
    this.pos.add(this.vel);
    fill(color(0, 255, 255));
    rect(this.pos.x, this.pos.y, this.s, this.s);
  };
}