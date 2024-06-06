function Enemy(x, y, r, col, room) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.col = col;
  this.show = true;
  this.room = room;
  this.xSpeed = 1;
  this.ySpeed = 1;
  //this.img = loadImage(img);

  this.display = function () {
    if (this.show && this.room == rooms[activeRow][activeColumn]) {
      fill(this.col);
      ellipse(this.x, this.y, this.r);
    }
  }; //end display
  this.update = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x > p.x) {
      this.xSpeed = -1;
    } else {
      this.xSpeed = 1;
    }
    if (this.y > p.y) {
      this.ySpeed = -1;
    } else {
      this.ySpeed = 1;
    }
  };
  this.collisionWithKey = function () {
    if (this.show && this.room == rooms[activeRow][activeColumn]) {
      //check if we hit the left of any wall
      if (
        this.y <= k.y + k.h &&
        this.y + this.h >= k.y &&
        this.x <= k.x + k.w &&
        this.x >= k.x
      ) {
        this.show = false;
      }
      //check if we hit the right of any wall
      if (
        this.y <= k.y + k.h &&
        this.y + this.h >= k.y &&
        this.x + this.w >= k.x &&
        this.x <= k.x + k.w
      ) {
        this.show = false;
      }
      //check if we hit the bottom of any wall
      if (
        this.x <= k.x + k.w &&
        this.x + this.w >= k.x &&
        this.y <= k.y + k.h &&
        this.y >= k.y
      ) {
        this.show = false;
      }
      //check if we hit the tothis of any wall
      if (
        this.x <= k.x + k.w &&
        this.x + this.w >= k.x &&
        this.y + this.h >= k.y &&
        this.y <= k.y + k.h
      ) {
        this.show = false;
      }
    }
  }; //end colision

  this.collisionWPlayer = function () {
    if (this.show && this.room == rooms[activeRow][activeColumn]) {
      //check if we hit the left of any wall
      let dx = Math.abs(this.x - p.x);
      let dy = Math.abs(this.y - p.y);
      dx = dx * dx
      dy = dy * dy
      let distance = Math.sqrt(dx + dy);
      console.log(distance);
      if (distance < 50) {
        activeRow = 0;
        activeColumn = 0;
        p.x = 200;
        p.y = 200;
      }
    }
  };
} //end player
