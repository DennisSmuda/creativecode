
let w,
    cols,
    rows,
    board,
    next;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  w = 20;

  cols = ceil(width/w);
  rows = ceil(height/w);

  // Initialize two arrays will be swapped
  board = new Array(cols);
  for (var i = 0; i < cols; i++) {
    board[i] = new Array(rows);
  }
  next = new Array(cols);
  for (i = 0; i < cols; i++) {
    next[i] = new Array(rows);
  }

  initialize();
}

function draw() {
  nextStep();
  colorMode(HSB);
  background('#202020');


  for ( var i = 0; i < cols;i++) {
    for ( var j = 0; j < rows;j++) {
      // if ((board[i][j] == 1)) fill(random(0,255), 100, 100);
      if ((board[i][j] == 1)) {
        fill('#a64545');
        stroke('#a64545');
      }
      else {
        fill('#202020');
        stroke('#202020');
      }
      rect(i*w, j*w, w-1, w-1);
    }
  }
}

function initialize() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (i == 0 || j == 0 || i == cols-1 || j == rows-1) board[i][j] = 0;
      else board[i][j] = floor(random(2));
      next[i][j] = 0;
    }
  }
}

function nextStep() {
  for (var x = 1; x < cols - 1; x++) {
    for (var y = 1; y < rows - 1; y++) {
      var neighbors = 0;
      // Check 8 surrounding tiles
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }

      neighbors -= board[x][y];
      // Rules of Life
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
      else                                             next[x][y] = board[x][y]; // Stasis
    }
  }

  // swap next gen
  var temp = board;
  board = next;
  next = temp;
}

function mousePressed() {
  initialize();
}
