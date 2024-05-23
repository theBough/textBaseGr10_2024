function Key(x, y, w, h, col, img) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.img = loadImage(img);
  this.acquired = false;

  this.display = function () {
    if (activeRow == 2 && activeColumn == 1) {
      this.img.resize(this.w, this.h);
      image(this.img, this.x, this.y);
    }//end if
    if(this.acquired){
      this.x = p.x + p.w;
      this.y = p.y + (p.h/2);
    }
  }; //end display
  
  this.playerCollision = function(){
    if (p.y <= this.y + this.h && p.y + p.h >=this.y && p.x <= this.x +this.w && p.x >= this.x) {
      this.acquired = true;
    }

  }
  
} //end key
