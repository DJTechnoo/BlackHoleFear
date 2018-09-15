function Item() {
	this.s = 10;		// size
	this.pos = createVector(400, 400);
	this.vel = createVector(20, 1);

  this.update = function(dt) {
    this.pos.x += this.vel.x * dt;
	this.pos.y += this.vel.y * dt;
    fill(color(0, 255, 255));
    rect(this.pos.x, this.pos.y, this.s, this.s);
  };
}