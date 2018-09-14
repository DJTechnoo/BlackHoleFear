function BlackHole() {
    this.x = 0;
	this.y = 0;
    //this.vel = createVector(0, 0);
  

  this.update = function()  {
   // this.pos.x += this.vel.x;
   // this.pos.y += this.vel.x;
	fill(color(14,14,14));
	ellipse(this.x, this.y,13,13);
	
  }
}
