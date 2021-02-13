class Block1{
    constructor(x,y,width,height){
        var options={
            restitution :0.1,
            friction :1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.box2im=loadImage('images/block2.jpg');
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.box2im,0,0,this.width,this.height);
        pop();
}
}