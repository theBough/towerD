function LeftTurn(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h);
  }
  this.collision = function(enemy){
    let vertDist = enemy.y -this.y;
    let horiDist = enemy.x -this.x;
    //console.log("vd: " + vertDist + "\n" + "hd: " + horiDist)
    if(Math.abs(vertDist) < 5 && Math.abs(horiDist) < 5){
      //turn left.
      //console.log("hey there")
      let tempX = enemy.xSpeed
      enemy.xSpeed = enemy.ySpeed;
       enemy.ySpeed = tempX * -1
    }
  }
}
