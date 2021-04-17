class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.4,
          friction:0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255
    }
    score(){
        if(this.visibility<0&&this.visibility>-105){
            score++
        }
    }
    display(){
    if(this.body.speed<3){
      var pos =this.body.position;
      push ()
      translate (pos.x,pos.y)
      rotate (this.body.angle)
      rectMode(CENTER);
      fill("brown");
      rect(0,0, this.width, this.height);
      pop ()
    }
    else{World.remove(world,this.body)
    push ()
    this.visibility-=5
    pop ()
    }
    }
  };