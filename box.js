class Block {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    stroke("black")
    //fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
  
      var pos =this.body.position;
      rectMode(CENTER);
      stroke("black")
      //fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
       
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
        
      }
      
  }

