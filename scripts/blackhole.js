function BlackHole() {
	this.pos = createVector(W/2, H/2);
	this.vel = createVector(0, 0);
	this.s = 3;

	
	this.update = function() {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.s += 0.5;
		fill(color(14, 14, 14));
		ellipse(this.pos.x, this.pos.y, this.s, this.s);
  };
}
