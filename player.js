function Player(x,y,w,h,col,img){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.img = img;
  this.isBeingClicked = false;
  
  this.display  = function(){
    push();
    fill(this.col)
    rect(this.x, this.y, this.w, this.h);
    pop()
  }
  this.update = function(){
    //look for keypress on keyboard, to move player
    if(keyIsDown(37)){
      this.x -= 5;
    }
    if(mouseIsPressed &&
       mouseX > this.x &&
       mouseX< this.x + this.w &&
      mouseY >this.y &&
       mouseY < this.y + this.h
      ){
      this.isBeingClicked = true;
    }else if( this.isBeingClicked && !mouseIsPressed){
      this.isBeingClicked = false;
    }
    
    if(this.isBeingClicked){
      this.x = mouseX - (this.w / 2);
      this.y = mouseY - (this.h /2);
    }//end if
    
  }//end function
  this.shoot = function(enemy){
    let deltaY = enemy.y - this.y
    let deltaX = enemy.x - this.x;
    let hyp = Math.sqrt((deltaX * deltaX)+(deltaY*deltaY))
    
    if(hyp < 300){
      b.push(new Bullet(this.x , this.y, 5,5,deltaX/50,deltaY/50,0))
    }
  }
  
  
}
