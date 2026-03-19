//--------- Global Variables------------------
let p = []; //array to hold the turrets
let e = []; //array to hold the enemies
let cardinalPics = []; //havent used it yet.
let b = []; //array to hold the bullets
let map;
//holder for leftTurns
let lt = [];
let waveCount = 5;
let stopWave;
//--------------------------------------------

//-------functions that need to be here because of p5js ------------------
function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 5; i++) {
    p.push(new Player(20 + i * 22, 440, 20, 20, "pink"));
  }
  sendWave();
  map = loadImage("map.png");
  placeLeftTurns();
}
function draw() {
  background(220);
  map.resize(640, 400);
  image(map, 0, 0);
  for (let i = 0; i < 5; i++) {
    p[i].display();
    p[i].update();
    for (let j = 0; j < e.length; j++) {
      shoot(e[j], p[i]);
    }
  }
  enemyStuff();
  leftTurns();
  bulletStuff();
}
function keyPressed() {
  if (key === "f") {
    //user pressed the f key on the keyboard
    b.push(new Bullet(p[0].x, p[0].y, 5, 5, 3, 0, 0));
  }
}

//--------- Below are self created functions----------------------------
function shoot(enemy, player) {
  let deltaY = enemy.y - player.y;
  let deltaX = enemy.x - player.x;
  let hyp = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (hyp < 300) {
    b.push(new Bullet(player.x, player.y, 5, 5, deltaX / 50, deltaY / 50, 0));
  }
}
function bulletStuff() {
  for (let i = 0; i < b.length; i++) {
    b[i].display();
    b[i].move();
  }
} //end bulletStuff
function sendWave() {
  stopWave = setInterval(createEnemy, 2000);
}
function enemyStuff() {
  for (let i = 0; i < e.length; i++) {
    e[i].display();
    e[i].move();
  } //end for loop
} //end EnemyStuff
function createEnemy() {
  //create an enemy object , and push it onto the array
  e.push(new Enemy(20, 170, 50, 50, "images/cardinal1.png", 1, 0, e.length));
  if (e.length >= waveCount) {
    clearInterval(stopWave);
  }
} //end createEnemy
function loadAnimationPictures() {
  let totalPics = 4;
  for (let i = 0; i < totalPics; i++) {
    let cardPic = loadImage(`images/`);
  }
} //end loadAnimations
function placeLeftTurns() {
  //this will be different for you!~!!!!!!!!!!!!!!!!!
  lt.push(new LeftTurn(300, 170, 40, 40));
  lt.push(new LeftTurn(300, 85, 40, 40));
  lt.push(new LeftTurn(150, 85, 40, 40));
  lt.push(new LeftTurn(150, 340, 40, 40));
} //end placeLeftTurns
function leftTurns() {
  for (let i = 0; i < lt.length; i++) {
    lt[i].display();
    for (let j = 0; j < e.length; j++) {
      lt[i].collision(e[j]);
    } //end loop
  }
} //end  leftTurns
