function BlackHole() {
  this.pos = createVector(0, 0);
  this.vel = createVector(0, 0);

  this.update = function() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    fill(color(14, 14, 14));
    ellipse(this.pos.x, this.pos.y, 13, 13);
  };
}
