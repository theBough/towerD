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
  
}
