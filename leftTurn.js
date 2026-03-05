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
   
    if(Math.abs(vertDist) < 1 && Math.abs(horiDist) < 1){
      //turn left.
      
      let tempX = enemy.xSpeed
      enemy.xSpeed = enemy.ySpeed;
       enemy.ySpeed = tempX * -1
    }
  }
}
