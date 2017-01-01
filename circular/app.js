let t = 0;
let r = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  translate(width/2, height/2);
  background(17);
  // stroke(255);
  strokeWeight(1);
  noStroke();


  fill(30, 60, 100);
  ellipse(x1(t), y1(t), r);
  fill(60, 60, 100);
  ellipse(2*x1(t*0.5), 2*y1(t*0.5), r);
  //
  fill(90, 60, 100);
  ellipse(1.5*x1(t/2), 3*y1(t/2), r);
  //
  fill(20, 70, 100);
  ellipse(x3(t/2), y3(t/2), r);

  t += 0.5;

}



function x1(t) { return 2 * sin(t/10) * 100; }
function x2(t) { return 2 * sin(t/10) * 100 + sin(t/5) * 50; }
function x3(t) { return 3 * sin(t/10) * 100 + sin(t/5) * 50; }

function y1(t) { return cos(t / 10) * 100; }
function y2(t) { return sin(t / 10) * 100; }
function y3(t) { return 3*cos(t / 10) * 100; }
