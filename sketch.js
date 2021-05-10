const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, platform1, platform2, ball;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10,
box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22,
box23, box24, box25, box26, box27, box28, box29;

function setup(){

    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600, height, 1200, 20);
    ball = new Ball(220, 350);
    slingshot = new Slingshot(ball.body, {x: 210, y: 340})
    platform1 = new Ground(400, 650, 300, 30);
    platform2 = new Ground(790, 350, 258, 30);
    //1st layer for platform 1
    box1 = new Box(270, 625, 40, 50);
    box2 = new Box(312, 625, 40, 50);
    box3 = new Box (354, 625, 40, 50);
    box4 = new Box (396, 625, 40, 50);
    box5 = new Box (438, 625, 40, 50);
    box6 = new Box (480, 625, 40, 50);
    box7 = new Box (522, 625, 40, 50);
    //2nd layer for platform 1
    box8 = new Box (312, 573, 40, 50);
    box9 = new Box (354, 573, 40, 50);
    box10 = new Box (396, 573, 40, 50);
    box11 = new Box (438, 573, 40, 50);
    box12 = new Box (480, 573, 40, 50);
    //3rd layer for pltform 1
    box13 = new Box (354, 520, 40, 50);
    box14 = new Box (396, 520, 40, 50);
    box15 = new Box (438, 520, 40, 50);
    //last 1 box on the top of platform 1
    box16 = new Box (396, 467, 40, 50);

    //making the boxes for the next platform2
    //1st layer of platform 2
    box17 = new Box (687, 325, 40 ,50);
    box18 = new Box (729, 325, 40, 50);
    box19 = new Box (771, 325, 40, 50);
    box20 = new Box (813, 325, 40, 50);
    box21 = new Box (855, 325, 40, 50);
    box22 = new Box (897, 325, 40, 50);
    //2nd layer fo platform 2
    box23 = new Box (729, 258, 40, 50);
    box24 = new Box (771, 258, 40, 50);
    box25 = new Box (813, 258, 40, 50);
    box26 = new Box (855, 258, 40, 50);

    box27 = new Box (771, 206, 40 ,50);
    box28 = new Box (813, 206, 40, 50);

    box29 = new Box (793, 154, 40, 50);
}

function draw(){

    background(0);
    Engine.update(engine);

    ground.display();
   // sling.display();
    platform1.display();
    platform2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();

    box23.display();
    box24.display();
    box25.display();
    box26.display();

    box27.display();
    box28.display();

    box29.display();

    ball.display();
    slingshot.display();
}
function mouseDragged(){
    Body.setPosition(ball.body, {x: mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}

