function Player(x,y,w,h,col,img){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.img = img;
  
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
    
  }
  
}
