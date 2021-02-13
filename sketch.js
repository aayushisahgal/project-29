const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;

var holder,ball1,grd;
var stand1,stand2;
var slingshot1;
var polygonImage,bgImage;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b17,b18,b19,b20,b21,b22,b23,b24,b25;

function preload(){

bgImage=loadImage('images/bg.webp');
}

function setup(){
    createCanvas(1100,500);
    engine=Engine.create();
    world=engine.world;

    grd=new Ground(450,490,2000,50);
    stand1=new Stand(450,310,270,20);
    stand2=new Stand1(830,220,210,20);

    //blockes for stand1
    b1=new Block(340,300,50,30);
    b2=new Block(390,300,50,30);
    b3=new Block(440,300,50,30);
    b4=new Block(490,300,50,30);
    b5=new Block(550,300,70,30);

    b6=new Block1(365,250,50,35);
    b7=new Block1(415.1,250,50,35);
    b8=new Block1(465.2,250,50,35);
    b9=new Block1(515.3,250,50,35);

    b10=new Block2(385,200,50,30);
    b11=new Block2(435,200,50,30);
    b12=new Block2(485,200,50,30);

    b13=new Block3(407,150,50,30);
    b14=new Block3(457,150,50,30);

    b15=new Block4(425,100,50,30);

    //blocks for stand2
    b16=new Block1(755,150,60,30);
    b17=new Block1(810,150,50,30);
    b18=new Block1(860,150,50,30);
    b19=new Block1(910,150,50,30);

    b20=new Block3(775,100,60,30)
    b21=new Block3(830,100,50,30)
    b22=new Block3(880,100,50,30)

    b23=new Block2(800,50,60,30)
    b24=new Block2(855,50,50,30)

    b25=new Block(825,20,60,30);

   ball1=new Ball(300,300);

   slingshot1= new Slingshot(ball1.body,{x:100,y:200});


}

function draw(){
    background(bgImage);
    Engine.update(engine);
    grd.display();

    
    stand1.display();

    stand2.display();

    ball1.display();


    //fill('silver');
    slingshot1.display();

    b25.display();

    b23.display();
    b24.display();

    b20.display();
    b21.display();
    b22.display();

    b16.display();
    b17.display();
    b18.display();
    b19.display();

    b15.display();

    b13.display();
    b14.display();

    
    b10.display();
    b11.display();
    b12.display();


    b6.display();
    b7.display();
    b8.display();
    b9.display();

   
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();

    stroke(53);
    textSize(20);
    text('drag the polygon to hit the crazy boxes',380,50);
   

  
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x: mouseX,y:mouseY});

}

function mouseReleased(){
    slingshot1.fly();
}

