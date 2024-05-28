let p,k,g;
let w = [];
let myFont
let activeRow, activeColoumn
function setup() {
  createCanvas(400, 400);
  p = new Player(200, 200, 10, 10, "#e9c46a", "nothing");
  k = new Key(20,20,20,20,"#e9c46a","key.jpg",rooms[0][0])
  g = new Gate(300,150,100,100,"white", rooms[0][1])
  myFont = loadFont("wght.ttf");
  activeRow = 0;
  activeColumn = 0;
}
function draw() {
  background("#2a9d8f");
  playerStuff();
  gateStuff();
  keyStuff();
  wallStuff();  
  textFont(myFont);
  textSize(50);
  text("Adventure", 50, 50);
  screenChange();
 rooms[activeRow][activeColumn].call();
  checkForCollision();
}
function playerStuff(){
  p.display();
  p.update();
}
function gateStuff(){
  g.display()
  g.collisionWithKey()
  g.collisionWPlayer()
}
function keyStuff(){
   k.display();
  k.playerCollision();
}
function wallStuff(){
  for (let i = 0; i < w.length; i++) {
    push();
    w[i].display();
    pop();
  } //end loop
}
function screenChange() {
  if (p.x + p.w < 0) {
    //The player has gone off the left side
    p.x = width;
    activeColumn -=1
  } //end left boundry
  if (p.x > width) {
    //The player has gone off the right side
    p.x = 0;
    activeColumn +=1
  } //end right boundry
  if (p.y > height) {
    //The player has gone off the bottom side
    p.y = 0;
    activeRow += 1;
  } //end bottom boundry
  if (p.y < 0) {
    //The player has gone off the top side
    p.y = height;
    activeRow -= 1
  } //end top boundry
}

