let t = 0;
const numLines = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background(17);
  stroke(255);
  strokeWeight(5);
  translate(width/2, height/2);

  for (let i = 0; i < numLines; i++) {
    stroke(i * 10, 50, 100);
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
  }

  t += 0.4;
}

function x1(t) {
  return 2 * sin(t/10) * 100 + sin(t/20) * 20 + sin(t/4) * 50;
}

function y1(t) {
  return -3 * cos(t/10) * 100 + sin(t/4) * 100 + cos(t/10) * 25;
}

function x2(t) {
  return 4 * sin(t/10) * 100 + sin(t/20) * 20 + cos(t/4) * 50;
}

function y2(t) {
  return -3 * cos(t/30) * 10 + cos(t/12) * 120;
}
