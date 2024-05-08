let p;
let w = [];
let myFont;
let activeRow, activeColumn;

function setup() {
  createCanvas(400, 400);
  fillRooms();
  p = new Player(200, 200, 10, 10, "#e9c46a", "nothing");
  w.push(new Wall(200,150, 20, 100, "#f4a261"));
  w.push(new Wall(0, 0, 20, height, "#386641"));
  w.push(new Wall(0, 0, width, 20, "#bc4749"));
  myFont = loadFont("wght.ttf");
  activeRow = 0;
  activeColumn = 0;
}
function draw() {
  background("#2a9d8f");
  p.display();
  p.update();
  for (let i = 0; i < w.length; i++) {
    push();
    w[i].display();
    pop();
  } //end loop

  textFont(myFont);
  textSize(50);
  text("Adventure", 50, 50);
  screenChange();
   rooms[activeRow][activeColumn].call();
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
    activeRow += 1
  } //end bottom boundry
  if (p.y < 0) {
    //The player has gone off the top side
    p.y = height;
    activeRow -= 1
  } //end top boundry
}
