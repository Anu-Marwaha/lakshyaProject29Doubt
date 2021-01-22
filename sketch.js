const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,log1,log2,log3,log4,log5,log6;
var backgroundImg,platform,chain1,chain2;
var gameState="OnSling";

function preload() {
}

function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,250,10);
    platform = new Ground(300, 500, 300, 10);

    box1 = new Box(600,340,70,70);
    box2 = new Box(600,380,70,70);
    box3 = new Box(600,300,70,70);
    box4 = new Box(520,380,70,70);
    box5 = new Box(560,380,70,70);
    box6 = new Box(560,340,70,70);
    box7 = new Box(640,380,70,70);
    box8 = new Box(680,380,70,70);
    box9 = new Box(640,340,70,70);

    box10 = new Box(300,440,70,70);
    box11 = new Box(300,480,70,70);
    box12 = new Box(300,400,70,70);
    box13 = new Box(220,320,70,70);
    box14 = new Box(260,400,70,70);
    box15 = new Box(260,400,70,70);
    box16 = new Box(340,400,70,70);
    box17 = new Box(380,440,70,70);
    box18 = new Box(340,440,70,70);
    box19 = new Box(420,440,70,70);
    box20 = new Box(180,440,70,70);
    box21 = new Box(220,400,70,70);
    box22 = new Box(380,400,70,70);
    box23 = new Box(260,360,70,70);
    box24 = new Box(340,360,70,70);
    box25 = new Box(300,320,70,70);

    hexagon = new Hexagon(100,150,40,40);

    chain1=new Slingshot(hexagon.body,{x:100,y:250});

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    //console.log(hexagon.body.position);

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
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box11.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    platform.display();
    ground.display();
    hexagon.display();

    chain1.display();
}

function mouseDragged(){
   // if(gameState!=="launched"){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
  //  }
}

function mouseReleased(){
    chain1.fly();
  //  gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
        chain1.attach(hexagon.body);
      //  gameState="OnSling";
      //  bird.trajectory=[];
    }
}