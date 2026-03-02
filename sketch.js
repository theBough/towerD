let p = [];
let e;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    p.push(new Player(200 + i * 20, 200, 20, 20, "green"));
  }
  e = new Enemy(20, 100, 50,50,"images/cardinal1.png")
}

function draw() {
  background(220);
  for (let i = 0; i < 5; i++) {
    p[i].display();
    p[i].update();
  }
  e.display()
}
