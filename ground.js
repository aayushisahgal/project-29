/*class Ground{
    constructor(){
        var options={
           isStatic: true
        }

        this.ground = Bodies.rectangle(450,390,900,20,options);
       
        World.add(world,this.body);
    }

    display(){
        strokeWeight(2);
        fill('pink');
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
       
}
}*/

class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.groundImage=loadImage('images/ground.webp')
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("cyan");
      image(this.groundImage,pos.x, pos.y, this.width, this.height);
    }
  };
