var mousePos,
    pos,
    target,
    vel,
    rad,
    drag,
    speed;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  r         = 60;
  mousePos  = createVector(0,0);
  pos       = createVector(0,0);
  target    = createVector(0,0);
  vel       = createVector(0,0);

  drag = 0.75;
  strength = 0.1;
}

function draw() {
  background('#202020');

  mousePos.set(mouseX, mouseY);
  target = mousePos;

  var force = p5.Vector.sub(target, pos);
  force     = force.mult(strength);
  vel       = vel.mult(drag);
  vel       = vel.add(force);
  pos       = pos.add(vel);

  // Draw circle
  fill(214, 71, 150);
  ellipse(pos.x,pos.y,r);
}
