function Item(x, y) {
  this.size = 10;
  this.pos = createVector(x, y);
  this.circlePos = createVector(
    this.pos.x + this.size / 2.0,
    this.pos.y + this.size / 2.0
  );
  this.vel = createVector(0, 0);

  this.update = function(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
    this.circlePos.x = this.pos.x + this.size / 2.0;
    this.circlePos.y = this.pos.y + this.size / 2.0;

    //		The items get scared when black hole is nearby
    //(x2-x1)^2 + (y1-y2)^2 <= (r1+r2)^2
    //
    if (
      (hole.pos.x - this.circlePos.x) * (hole.pos.x - this.circlePos.x) +
        (this.circlePos.y - hole.pos.y) * (this.circlePos.y - hole.pos.y) <=
      (hole.size + this.size) * (hole.size + this.size)
    ) {
      fill(color("black"));
      ellipse(this.circlePos.x, this.circlePos.y, this.size * 2, this.size * 2);
      this.vel.add(p5.Vector.sub(hole.pos, this.pos));
      this.vel.mult(0.3);
    } /*else{
		
		this.vel.add(p5.Vector.sub(this.pos, hole.pos));
		this.vel.mult(0.03);
			
			
	}*/

    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x *= -1;
    }
    if (this.pos.x + this.size > WIDTH) {
      this.pos.x = WIDTH - this.size;
      this.vel.x *= -1;
    }
    if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y *= -1;
    }
    if (this.pos.y + this.size > HEIGTH) {
      this.pos.y = HEIGTH - this.s;
      this.vel.y *= -1;
    }

    fill(color(0, 255, 255));
    rect(this.pos.x, this.pos.y, this.size, this.size);
  };
}
