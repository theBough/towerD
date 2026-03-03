let p = [];
let e;
let map;

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 5; i++) {
    p.push(new Player(200 + i * 20, 200, 20, 20, "green"));
  }
  e = new Enemy(20, 100, 50,50,"images/cardinal1.png")
  map = loadImage("map.png")
}

function draw() {
  background(220);
  map.resize(640,400)
  image(map,0,0)
  for (let i = 0; i < 5; i++) {
    p[i].display();
    p[i].update();
  }
  e.display()
}
