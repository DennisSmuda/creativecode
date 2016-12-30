

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
    strokeWidth: {1: 0},
    duration: 4000,
    opacity: {1:0},
    delay: 100,
    easing: 'cubic.inOut',
    quantifier: 5,
  });

  const smallerCircle = new mojs.Burst({
    radius: {0: 50},
    count: 12,
    scale: 5,
    fill: 'none',
    stroke: 'magenta',
    delay: 500
  });

  const smallerCircleLeft = new mojs.Burst({
    radius: {0: 30},
    shape: 'circle',
    count: 12,
    scale: 2,
    x: '-150',
    fill: 'none',
    delay: 1500
  });
  const smallerCircleRight = new mojs.Burst({
    radius: {0: 30},
    shape: 'rect',
    count: 12,
    scale: 2,
    x: '+150',
    fill: 'blue',
    stroke: 'blue',
    delay: 1500,
    duration: 4000
  });

  let height = parseInt($(window).height() / 2)-10;

  seed = (Math.random() - 0.5) * 2;
  seed2 = (Math.random() - 0.5) * 2;

  const shapeSwirl = new mojs.ShapeSwirl({
    fill:           'cyan',
    x: (seed*-300),
    y:              { 250: -150 },
    duration:       3000,
    delay: seed*2000,

  });
  const shapeSwirl2 = new mojs.ShapeSwirl({
    fill:           'red',
    x: seed2*100,
    y:              { 250: -150 },
    duration:       3000,
    delay: seed2*5000,
  });

  const shapeSwirl3 = new mojs.ShapeSwirl({
    fill:           'rgb(5, 207, 80)',
    x: seed*-700,
    y:              { 250: -150 },
    duration:       3000,
    delay: seed*1000,
  });
  const shapeSwirl4 = new mojs.ShapeSwirl({
    fill:           'teal',
    x: seed2*-300,
    y:              { 250: -150 },
    duration:       3000,
    delay: seed2*-1000,
  });


  const Shapes = mojs.stagger( mojs.Shape );

  const shapes = new Shapes({
    quantifier: 3,
    x: 'stagger(-150,150)',
    delay: [0, 800, 0],
    scale: { 0: 0.4, 0.4: 0 },
    fill: [{ 'white': 'orange' }, { 'white': 'yellow' }],
    duration: 5000,
    easing: 'elastic.out'
  });

  const timeline = new mojs.Timeline({
    repeat: 999
  })
    .add(burst)
    .add(circle)
    .add(smallerCircle)
    .add(shapes)
    .add(smallerCircleLeft)
    .add(smallerCircleRight)
    .add(burst_2)
    // .play();



    const backTL = new mojs.Timeline({
      repeat: 999
    })
      .add(shapeSwirl)
      .add(shapeSwirl2)
      .add(shapeSwirl3)
      .add(shapeSwirl4)
      .play();
  // Play Burst on click
  $(document.body).click(function() {
    // burst.reset();
    // burst.play();
    timeline.reset();
    timeline.play();
  });
});
