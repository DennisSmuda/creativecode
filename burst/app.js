

$(document).ready(function() {

  const burst = new mojs.Burst({
    radius: { 0: 360},
    count: 20,
    children: {
      shape: 'cross',
      stroke: 'teal',
      angle: {360: 0},
      radius: { 10: 5},
      duration: 3000
    },
  });
  const burst_2 = new mojs.Burst({
    radius: { 0: 360},
    count: 20,
    children: {
      shape: 'rect',
      stroke: 'red',
      angle: {0: -360},
      radius: { 0: 15},
      duration: 1000,
      delay: 300
    },
  });

  const circle = new mojs.Shape({
    radius: {0:200},
    fill: 'none',
    stroke: 'yellow',
    strokeWidth: {5: 0},
    duration: 4000,
    opacity: {1:0},
    delay: 100,
    easing: 'cubic.inOut',
    quantifier: 5,
  })

  const Shapes = mojs.stagger( mojs.Shape );

  const shapes = new Shapes({
    quantifier: 3,
    x: 'stagger(-150,150)',
    delay: [0, 1200, 0],
    scale: { 0: 0.4 },
    fill: [{ 'cyan': 'orange' }, { 'hotpink': 'yellow' }],
    duration: 5000,
    easing: 'elastic.out'
  });

  const timeline = new mojs.Timeline({
    repeat: 999
  })
    .add(burst)
    .add(circle)
    .add(shapes)
    .add(burst_2)
    // .play();



  // Play Burst on click
  $(document.body).click(function() {
    // burst.reset();
    // burst.play();
    timeline.reset();
    timeline.play();
  });
});
