//--------- Global Variables------------------
let p = [];
let e = [];
let cardinalPics = [];
let map;
//holder for leftTurns
let lt = [];
//--------------------------------------------

//-------functions that need to be here because of p5js ------------------
function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 5; i++) {
    p.push(new Player(20 + i * 22, 440, 20, 20, "green"));
  }
  sendWave(4);
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
  }
  enemyStuff();
  leftTurns();
}
//--------- Below are self created functions----------------------------
function sendWave(howMany){
  let stopWave = setInterval(createEnemy, 2000);
}
function enemyStuff() {
  for (let i = 0; i < e.length; i++) {
    e[i].display();
    e[i].move();
  } //end for loop
} //end EnemyStuff
function createEnemy() {
  //create an enemy object , and push it onto the array
  e.push(new Enemy(20, 170, 50, 50, "images/cardinal1.png", 1, 0));
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
    for(let j =0 ; j < e.length ; j++){
      lt[i].collision(e[j]);
    }//end loop
    
  }
} //end  leftTurns
