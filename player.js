function Player(x,y,w,h,col,img){
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
  this.update = function(){
    if(keyIsDown(37)){
      //the left arrow key is pressed
      this.x -= 3;
    }
  }//end update
}//end player
