function BlackHole() {
	this.pos = createVector(W/2, H/2);
	this.vel = createVector(0, 0);
	this.s = 3;
	this.SPD = 0.3;
	
	// for spring physics
	this.targetSize = this.s;
	this.force = 0;
	this.strength = 0.1;
	this.drag =	0.90;
	this.growSpd = 0;
	
	
	// grow from this.s to this.targetsize.
	this.grow = function(t){
		this.targetSize += t;
	}
	
	
	
	this.growSpring = function(){		// Used when growing the black hole with bouncy effect
		this.force = this.targetSize-this.s; 
		this.force *= this.strength;
		this.growSpd *= this.drag;
		this.growSpd += this.force;
		this.s += this.growSpd;
	}
	
	
	//	control the player
	this.control = function(dt){
		if(controller.left) this.vel.x -= this.SPD * dt;
		if(controller.right) this.vel.x += this.SPD * dt;
		if(controller.up)	 this.vel.y -= this.SPD * dt;
		if(controller.down)  this.vel.y += this.SPD * dt;	
	}
	

	
	this.update = function(dt) {
		
		
		this.control(dt);
		this.growSpring();
		
		this.pos.add(this.vel);
		fill(color(14, 14, 14));
		ellipse(this.pos.x, this.pos.y, this.s, this.s);
  };
}
