function Key(x, y, w, h, col, img) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.img = loadImage(img);

  this.display = function () {
    if (activeRow == 2 && activeColumn == 1) {
      this.img.resize(this.w, this.h);
      image(this.img, this.x, this.y);
    }
  }; //end display
} //end player
