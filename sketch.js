function Enemy(x,y,w,h,img, xSpeed, ySpeed){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //this.col = col;
  this.img = loadImage(img);
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  
  this.display  = function(){
    push();
    //fill(this.col)
    //rect(this.x, this.y, this.w, this.h);
    this.img.resize(this.w, this.h)
    image(this.img, this.x, this.y)
    pop()
  }
  this.move = function(){
    this.x += xSpeed;
    this.y += ySpeed;
  }
  
  
}
