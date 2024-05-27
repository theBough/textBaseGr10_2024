function Key(x, y, w, h, col, img,room) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.img = loadImage(img);
  this.acquired = false;
  this.room = room

  this.display = function () {
    if (this.room == rooms[activeRow][activeColumn]) {
      this.img.resize(this.w, this.h);
      image(this.img, this.x, this.y);
    }//end if
    if(this.acquired){
      this.x = p.x + p.w;
      this.y = p.y + (p.h/2);
       this.img.resize(this.w, this.h);
      image(this.img, this.x, this.y);
    }
  }; //end display
  
  this.playerCollision = function(){
    if (p.y <= this.y + this.h && p.y + p.h >=this.y && p.x <= this.x +this.w && p.x >= this.x && this.room == rooms[activeRow][activeColumn]) {
      this.acquired = true;
    }

  }
  
} //end key
