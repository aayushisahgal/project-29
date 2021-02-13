class Stand{
    constructor(x,y,width,height){
        var options={
           isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.standIm1=loadImage('images/astand.jpg');
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        strokeWeight(2);
       // fill('orange');
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.standIm1,0,0,this.width,this.height);
        pop();
}

}