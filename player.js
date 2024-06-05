function Player(x, y, w, h, col, img, room) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.room = room;
  //this.img = loadImage(img);

  this.display = function () {
    fill(this.col);
    rect(this.x, this.y, this.w, this.h);
  }; //end display
  this.update = function () {
    if (rooms[activeRow][activeColumn] == this.room) {
      console.log("test")
      if (keyIsDown(37)) {
        //the left arrow key is pres
        this.x += 3;
      }
      if (keyIsDown(38)) {
        //the up arrow key is pressed
        this.y += 3;
      }
      if (keyIsDown(39)) {
        //the right arrow key is pressed
        this.x -= 3;
      }
      if (keyIsDown(40)) {
        //the down arrow key is pressed
        this.y -= 3;
      }
    } else {
      if (keyIsDown(37)) {
        //the left arrow key is pres
        this.x -= 3;
      }
      if (keyIsDown(38)) {
        //the up arrow key is pressed
        this.y -= 3;
      }
      if (keyIsDown(39)) {
        //the right arrow key is pressed
        this.x += 3;
      }
      if (keyIsDown(40)) {
        //the down arrow key is pressed
        this.y += 3;
      }
    }
  }; //end update
} //end player
