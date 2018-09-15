function BlackHole() {
  this.pos = createVector(WIDTH / 2, HEIGHT / 2);
  this.vel = createVector(0, 0);
  this.accel = createVector(0, 0);
  this.accelRate = 2.5;
  this.size = 25;

  // for spring physics
  this.targetSize = this.size;
  this.force = 0;
  this.strength = 0.01;
  this.drag = 0.9;
  this.growRate = 0;

  // grow from this.s to this.targetsize.
  this.grow = function(t) {
    this.targetSize += t;
  };

  this.growSpring = function() {
    // Used when growing the black hole with bouncy effect
    this.force = this.targetSize - this.size;
    this.force *= this.strength;
    this.growRate *= this.drag;
    this.growRate += this.force;
    this.size += this.growRate;
  };

  //	control the player
  this.control = function(dt) {
    this.accel.x = this.accel.y = 0;

    if (controller.left) this.accel.x = -this.accelRate;
    else if (controller.right) this.accel.x = this.accelRate;
    if (controller.up) this.accel.y = -this.accelRate;
    else if (controller.down) this.accel.y = this.accelRate;

    this.accel.mult(dt);
    this.vel.add(this.accel);

    // Adjust velocity proportionally to size (bigger = slower)
    var maxVel = 5 - 0.01 * this.size;
    maxVel = constrain(maxVel, 1, 5);
    this.vel = this.vel.limit(maxVel);
  };

  this.update = function(dt) {
    this.control(dt);
    this.growSpring();

    // Add & Constrain min-max values
    this.pos.add(this.vel);

    var min = this.size / 2 + 1.8;
    var maxX = WIDTH - min;
    var maxY = HEIGHT - min;

    if (this.pos.x < min || this.pos.x > maxX) {
      this.vel.x = 0;
      this.pos.x = constrain(this.pos.x, min, maxX);
    }
    if (this.pos.y < min || this.pos.y > maxY) {
      this.vel.y = 0;
      this.pos.y = constrain(this.pos.y, min, maxY);
    }

    // Continously shrink the hole proportionally to its size (smaller = faster)
    this.targetSize -= ((75 * Math.E) / this.targetSize) * dt;
    if (this.targetSize <= 4) {
      this.targetSize = 0;
      console.log("Game Over");
	  score.gameOver = true;
    }

    // Adjust acceleration/handling proportionally to size (bigger = slower)
    this.accelRate = 5 - 0.01 * this.size;
    this.accelRate = constrain(this.accelRate, 1, 5);

    fill(color(14, 14, 14));
    ellipse(this.pos.x, this.pos.y, this.size);
  };
}
