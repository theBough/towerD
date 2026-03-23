function Enemy(x,y,w,h,img, xSpeed, ySpeed,id){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //this.col = col;
  this.img = loadImage(img);
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.id = id

  this.collisionWithEnemy = function(thisBullet){
    if(thisBullet.x > this.x &&
      thisBullet.x + thisBullet.w < this.x + this.w &&
      thisBullet.y> this.y &&
      thisBullet.y + thisBullet.h < this.y + this.h){
      console.log("hit")
    }
  }
  this.display  = function(){
    push();
    //fill(this.col)
    //rect(this.x, this.y, this.w, this.h);
    this.img.resize(this.w, this.h)
    image(this.img, this.x, this.y)
    pop()
  }
  this.move = function(){
    //console.log(e.indexOf(e.id))
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    //console.log(this.id)
    //check if we left the canvas, if yes delete it
    if(this.x > width || this.x <0 || this.y > height || this.y <0){ 
      //let thisTemp = e.findIndex(this.id)
     e.splice(e.findIndex(a => a.id ===this.id),1)
    }
  }
  
  
}
