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
    }else{
      this.isBeingClicked = false;      
    }//end if
    
    if(this.isBeingClicked){
      this.x = mouseX;
      this.y = mouseY;
    }//end if
    
  }//end function
  
}
