let p, p2;


function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,20,20,"green")
  p2 = new Player(200,250,20,20,"red")
}

function draw() {
  background(220);
  p.display();
  p2.display();
  
  p.update();
  
}
