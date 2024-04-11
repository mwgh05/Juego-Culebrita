class Snake {
    constructor() {
        this.body = [];
        this.body.push({x: width/2, y: height/2}); 
        this.dir = 1; 
        this.lastX = width/2;
        this.lastY = height/2;
        this.isGameRunning = true;
        this.score = 0;
    }
  
    draw() {
      fill(0);
      for (let b of this.body) {
        rect(b.x, b.y, width / GRID_SIZE, height / GRID_SIZE)
      }
    }
  
    update() {
        if (!this.isGameRunning) {
            return;
        }
        if (this.isOffGrid()){
            this.isGameRunning = false;
        }
        if (this.hitDetection()){
            this.isGameRunning = false;
        }
        this.lastX = this.body[this.body.length-1].x;      
        this.lastY = this.body[this.body.length-1].y;     
        for (let i = this.body.length-1; i >= 1; i--) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
    
        if (this.dir == 1) {
            this.body[0].x += width / GRID_SIZE;  
        } else if (this.dir == 2) {
            this.body[0].y += height / GRID_SIZE;
        } else if (this.dir == 3) {
            this.body[0].x -= width / GRID_SIZE;
        } else if (this.dir == 4) {
            this.body[0].y -= height / GRID_SIZE;
        }
    }
  
    grow() {
      this.body.push({x: this.lastX, y: this.lastY});
      this.score++;
    }
  
    hasEatenFood() {
      if (this.body[0].x == food.x && this.body[0].y == food.y) {
        return true;     
      }
    }

    hitDetection() {
        for (let i = 1; i < this.body.length; i++) {
            if (this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y) {
                return true;
            }
        }
        return false;
    }

    reset() {
        this.isGameRunning = true;
        this.body = [{x: width/2, y: height/2}];
        this.dir = 1;
        this.score = 0;
    }

    isOffGrid() {
        if (this.body[0].x < 0 || this.body[0].x >= width ||
            this.body[0].y < 0 || this.body[0].y >= height) {
            return true;
        }
    
        return false;
    }

    gameLost() {
        fill(255, 0, 0);  
        textSize(32);
        textAlign(CENTER, CENTER);  
        text("MAMASTE!!", width / 2, height / 2);
        fill(0);
        textSize(16); 
        text("Dale enter si te atreves...", width / 2, height / 2 + 40); 
    }
  
  }