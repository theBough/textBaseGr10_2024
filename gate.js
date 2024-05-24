function Gate(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.show = true;
  //this.img = loadImage(img);
  
  this.display = function(){
    if(this.show){
      fill(this.col)
      rect(this.x, this.y, this.w, this.h)
    }
  }//end display
  
  this.collisionWithKey = function() {
  
    //check if we hit the left of any wall
    if (this.y <= k.y + k.h && this.y + this.h >= k.y && this.x <= k.x + k.w && this.x >= k.x) {
      this.show = false
    }
    //check if we hit the right of any wall
    if (this.y <= k.y + k.h && this.y + this.h >= k.y && this.x + this.w >= k.x && this.x <= k.x + k.w) {
      this.show = false
    }
    //check if we hit the bottom of any wall
    if (this.x <= k.x + k.w && this.x + this.w >= k.x && this.y <= k.y + k.h && this.y >= k.y) {
      this.show = false
    }
    //check if we hit the tothis of any wall
    if (this.x <= k.x + k.w && this.x + this.w >= k.x && this.y + this.h >= k.y && this.y <= k.y + k.h) {
      this.show = false
    }

}//end colision
 
}//end player
