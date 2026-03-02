let p = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    p.push(new Player(200 + i * 20, 200, 20, 20, "green"));
  }
}

function draw() {
  background(220);
  for (let i = 0; i < 5; i++) {
    p[i].display();
    p[i].update();
  }
}
