var movers = [];

var G = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (var i = 0; i < 20; i++) {
    movers[i] = new Mover(random(0.1, 3), random(width), random(height));
  }
}

function draw() {
  background('#171717');

  for (var i = 0; i < movers.length; i++) {
    for (var j = 0; j < movers.length; j++) {
      if (i !== j) {
        var force = movers[j].calculateAttraction(movers[i]);
        movers[i].applyForce(force);
      }
    }

    movers[i].update();
    movers[i].display();
  }
}
