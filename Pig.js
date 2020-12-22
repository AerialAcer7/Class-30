class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visible = 255;
  }
display(){
  console.log(this.body.speed);
  push();
  if(this.body.speed>5){
   World.remove(world,this.body); 
   this.visible = this.visible-10;
   tint(255,this.visible);
   image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  }
  else{
    super.display();
  }
  pop();




}

  }
