const GRID_SIZE = 20;

let snake;
function setup() {
  createCanvas(700, 700);
  snake = new Snake();
  food = new Food();
  frameRate(4);
}

function draw() {
  background(155, 204, 153);
  fill(0);
  textSize(16); 
  textAlign(LEFT, TOP);  
  text("Puntos: " + snake.score, 10, 10);

  if (!snake.isGameRunning){
    snake.gameLost();
  } else {
    snake.update();
    if (snake.hasEatenFood()) {   
      snake.grow();
      food.spawn();
    }
    snake.draw();
    food.draw();
  }
}

function keyPressed() {
  if (keyCode === 39 && snake.dir !== 3) {
    snake.dir = 1;
  } else if (keyCode === 40 && snake.dir !== 4) {
    snake.dir = 2;
  } else if (keyCode === 37 && snake.dir !== 1) {
    snake.dir = 3;
  } else if (keyCode === 38 && snake.dir !== 2) {
    snake.dir = 4;
  } else if (keyCode === 13) {
    snake.reset();
  }
}

