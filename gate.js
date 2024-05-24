function Gate(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  //this.img = loadImage(img);
  
  this.display = function(){
    fill(this.col)
    rect(this.x, this.y, this.w, this.h)
  }//end display
  
  this.collisionWithKey = function() {
  
    //check if we hit the left of any wall
    if (this.y <= g.y + g.h && this.y + this.h >= g.y && this.x <= g.x + g.w && this.x >= g.x) {
      this.x += 5
    }
    //check if we hit the right of any wall
    if (this.y <= g.y + g.h && this.y + this.h >= g.y && this.x + this.w >= g.x && this.x <= g.x + g.w) {
      this.x -= 5
    }
    //check if we hit the bottom of any wall
    if (this.x <= g.x + g.w && this.x + this.w >= g.x && this.y <= g.y + g.h && this.y >= g.y) {
      this.y += 5;
    }
    //check if we hit the tothis of any wall
    if (this.x <= g.x + g.w && this.x + this.w >= g.x && this.y + this.h >= g.y && this.y <= g.y + g.h) {
      this.y -= 5;
    }

}//end colision
 
}//end player
