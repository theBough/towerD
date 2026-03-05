let p = [];
let e;
let map;
//holder for leftTurns
let lt;

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 5; i++) {
    p.push(new Player(200 + i * 20, 200, 20, 20, "green"));
  }
  e = new Enemy(20, 170, 50,50,"images/cardinal1.png",1,0)
  map = loadImage("map.png")
  placeLeftTurns();
}
function draw() {
  frameRate(30)
  background(220);
  map.resize(640,400)
  image(map,0,0)
  for (let i = 0; i < 5; i++) {
    p[i].display();
    p[i].update();
  }
  e.display()
  e.move();
  leftTurns();
}
//------------------------------------------------------------
//Below are self created functions
function placeLeftTurns(){
  lt = new LeftTurn(300,170,40,40);
}
function leftTurns(){
  lt.display();
  lt.collision(e);
}
