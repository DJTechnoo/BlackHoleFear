function Item() {
	this.s = 10;		// size
	this.pos = createVector(400, 400);
	this.circlePos = createVector( this.pos.x + this.s/2.0, this.pos.y + this.s/2.0);
	this.vel = createVector(20, 1);
	

  this.update = function(dt) {
    this.pos.x += this.vel.x * dt;
	this.pos.y += this.vel.y * dt;
	this.circlePos.x = this.pos.x + this.s/2.0; 
	this.circlePos.y = this.pos.y + this.s/2.0;
	
	
	
	//		The items get scared when black hole is nearby
	//(x2-x1)^2 + (y1-y2)^2 <= (r1+r2)^2
	//
	if(((hole.pos.x - this.circlePos.x)*(hole.pos.x - this.circlePos.x) + 
		(this.circlePos.y-hole.pos.y)*(this.circlePos.y-hole.pos.y)) <=
		((hole.s + this.s)*(hole.s + this.s))){
			
			fill(color("black"));
			ellipse(this.circlePos.x, this.circlePos.y, this.s*2, this.s*2);
			this.vel.add(p5.Vector.sub(this.pos, hole.pos));
			
		}
    fill(color(0, 255, 255));
    rect(this.pos.x, this.pos.y, this.s, this.s);
  };
}