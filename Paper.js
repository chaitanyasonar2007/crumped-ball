class Paper {
  constructor(x,y,r) {
  
    var options = {
      isStatic:false,  
      restitution:0.3,
      friction:0.5,
      density:1.2
    }
    
    
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(x, y, r/2, options);
    this.image = loadImage("images/paper.png")
    World.add(world, this.body);

  }
  display()
  {
    var paperpos = this.body.position;
    push(); 
    translate(paperpos.x,paperpos.y);
    fill("cyan");
    ellipse(0,0,this.x,this.y);
    imageMode(CENTER);
    image(this.image,15,15,100,100);
    pop();
  }
};