function Bullet(x,y,w,h, xSpeed, ySpeed,id){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //this.col = col;
  //this.img = loadImage(img);
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.id = id

  this.display  = function(){
    push();
    fill("red")
    rect(this.x, this.y, this.w, this.h);
    //this.img.resize(this.w, this.h)
    //image(this.img, this.x, this.y)
    pop()
  }
  this.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    //check if we left the canvas, if yes delete it
    if(this.x > width || this.x <0 || this.y > height || this.y <0){ 
    
    }
    if(this.x > width || this.x <0 || this.y > height || this.y <0){ 
      //let thisTemp = e.findIndex(this.id)
     b.splice(b.findIndex(a => a.id ===this.id),1)
    }
  }
  
  
}
