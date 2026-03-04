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
    
    if(vertDist < 5 && horiDist < 5){
      //turn left
      enemy.ySpeed = -1;
      enemy.xSpeed = 0;
    }
  }
}
