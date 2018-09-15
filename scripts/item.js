function Item(x, y) {
	this.s = 10;		// size
	this.pos = createVector(x, y);
	this.circlePos = createVector( this.pos.x + this.s/2.0, this.pos.y + this.s/2.0);
	this.vel = createVector(0, 0);
	

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
			this.vel.add(p5.Vector.sub(hole.pos,this.pos));
			this.vel.mult(0.3);
			
	} /*else{
		
		this.vel.add(p5.Vector.sub(this.pos, hole.pos));
		this.vel.mult(0.03);
			
			
	}*/
	
	
	
	if(this.pos.x < 0) {this.pos.x = 0; this.vel.x *= -1;}
	if(this.pos.x + this.s > W){ this.pos.x = W-this.s; this.vel.x *= -1;}
	if(this.pos.y < 0) {this.pos.y = 0; this.vel.y *= -1;}
	if(this.pos.y + this.s > H) {this.pos.y = H-this.s; this.vel.y *= -1;}
	
	
	
	
	
	
	
    fill(color(0, 255, 255));
    rect(this.pos.x, this.pos.y, this.s, this.s);
  };
}