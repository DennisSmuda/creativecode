
var Mover = function(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  colorMode(HSB, 100)
  this.hue = random(0, 100);

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    if (this.position.x > windowWidth || this.position.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.position.y > windowHeight || this.position.y < 0) {
      this.velocity.y *= -1;
    }
  };

  this.display = function() {
    fill(this.hue, 80, 100);
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
  };

  this.calculateAttraction = function(m) {
    // Calculate direction of force
    var force = p5.Vector.sub(this.position, m.position);
    // Distance between objects
    var distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, 5.0, 25.0);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (G * this.mass * m.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  };
}
