class BlackHole {
  constructor() {
    this.pos = createVector(0, 0);
    this.vel = createVector(0, 0);
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.x;
  }
}
