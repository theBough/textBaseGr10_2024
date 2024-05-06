let p;
let myFont;

function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,'#e76f51',"nothing")
  myFont = loadFont("wght.ttf")
}
function draw() {
  background('#2a9d8f');
  p.display();
  p.update();
  textFont(myFont)
  textSize(50);
  text("Adventure", 50,50)
  screenChange();
}
function screenChange(){
  if(p.x + p.w < 0){
    //The player has gone off the left side
    p.x = width
  }//end left boundry
  
  
}
