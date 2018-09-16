function Item(x, y) {
  this.size = Math.random() * 15 + 2;
  this.pos = createVector(x, y);
  this.circlePos = createVector(
    this.pos.x + this.size / 2.0,
    this.pos.y + this.size / 2.0
  );
  this.vel = createVector(0, 0);
  this.accel = createVector(0, 0);
  this.escapeForce = 50.0;

  this.update = function(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
    this.circlePos.x = this.pos.x + this.size / 2.0;
    this.circlePos.y = this.pos.y + this.size / 2.0;

    //		The items get scared when black hole is nearby
    //(x2-x1)^2 + (y1-y2)^2 <= (r1+r2)^2
    //

    if (this.inProximity(this.size + hole.size)) {
      fill(color("black"));
      ellipse(this.circlePos.x, this.circlePos.y, this.size * 2);

      var dir = p5.Vector.sub(this.pos, hole.pos).normalize();
      var boostMod = controller.boost ? 0.25 : 1;
      var forceMod = ((hole.size / 20) * this.pos.dist(hole.pos)) / 10;
      this.accel = p5.Vector.mult(dir, this.escapeForce * boostMod - forceMod);
      this.accel = this.accel.limit(200);
    } else if (this.inProximity(this.size * 2 + hole.size * 2)) {
      var dir = p5.Vector.sub(this.pos, hole.pos).normalize();
      var boostMod = controller.boost ? 0.25 : 1;
      this.accel = p5.Vector.mult(dir, this.escapeForce * boostMod);
      this.accel = this.accel.limit(100 + score.level);
    } else {
      this.accel.mult(0);
    }

    this.vel.add(this.accel);
    this.vel = this.vel.limit(100 + score.level);

    // if eaten
    if (this.inProximity(hole.size / 2 + this.size)) {
      /* (hole.pos.x - this.circlePos.x) * (hole.pos.x - this.circlePos.x) +
        (this.circlePos.y - hole.pos.y) * (this.circlePos.y - hole.pos.y) <=
      (hole.targetSize / 2 + this.size) * (hole.targetSize / 2 + this.size)*/
      this.eaten = true;
      hole.grow(Math.sqrt(this.size / 100));
      if (!score.gameOver) score.addScore(Math.sqrt(this.size));
    }

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
    if (this.pos.y + this.size > HEIGHT) {
      this.pos.y = HEIGHT - this.size;
      this.vel.y *= -1;
    }

    fill(color(0, 255, 255));
    rect(this.pos.x, this.pos.y, this.size, this.size);
  };

  this.inProximity = function(tDist) {
    return this.pos.dist(hole.pos) <= tDist;
  };
}
