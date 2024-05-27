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
  
  this.collisionWPlayer = function(){
    
    //check if we hit the left of any wall
    if (p.y <= this.y + this.h && p.y + p.h >= this.y && p.x <= this.x + this.w && p.x >= this.x) {
      p.x += 5
    }

    //check if we hit the right of any wall
    if (p.y <= this.y + this.h && p.y + p.h >= this.y && p.x + p.w >= this.x && p.x <= this.x + this.w) {
      p.x -= 5
    }

    //check if we hit the bottom of any wall
    if (p.x <= this.x + this.w && p.x + p.w >= this.x && p.y <= this.y + this.h && p.y >= this.y) {
      p.y += 5;
    }

    //check if we hit the top of any wall
    if (p.x <= this.x + this.w && p.x + p.w >= this.x && p.y + p.h >= this.y && p.y <= this.y + this.h) {
      p.y -= 5;
    }

  }
 
}//end player
