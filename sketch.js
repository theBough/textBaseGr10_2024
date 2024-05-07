let p;
let w =[];
let myFont;

function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,'#e76f51',"nothing")
  w.push(new Wall(width -20,0, 20,height,"#023047"))
  myFont = loadFont("wght.ttf")
}
function draw() {
  background('#2a9d8f');
  p.display();
  p.update();
  for(let i =0; i<w.length ; i++){
    w[i].display()
  }//end loop
  
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
   if(p.x > width){
    //The player has gone off the right side
    p.x = 0
  }//end right boundry
  if(p.y > height){
    //The player has gone off the bottom side
    p.y = 0
  }//end bottom boundry
   if(p.y < 0){
    //The player has gone off the top side
    p.y = height
  }//end top boundry
  
}
