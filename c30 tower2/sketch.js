const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g1 , g2 , g3;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,
b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,
b26,b27,b28,b29,b30,b31,b32;
var polygon,sling;

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
  world = engine.world;
  g1 = new Ground(600, 305, 250, 20);
  g2 = new Ground(1000, 200, 250, 20);
  g3 = new Ground(1200, 400, 2400, 40);

  b1 = new Box(610,280,20,30);
  b2 = new Box(610,280,20,30);
  b3 = new Box(610,280,20,30);
  b4 = new Box(610,280,20,30);
  b5 = new Box(610,280,20,30);
  b6 = new Box(610,280,20,30);
  b7 = new Box(610,280,20,30);
  b8 = new Box(610,260,20,30);
  b9 = new Box(610,260,20,30);
  b10 = new Box(610,260,20,30);
  b11 = new Box(610,260,20,30);
  b12 = new Box(610,260,20,30);
  b13 = new Box(610,220,20,30);
  b14 = new Box(610,220,20,30);
  b15 = new Box(610,200,20,30);
  b16 = new Box(610,170,20,30);
  b17 = new Box1 (1000,170,20,30);
   b18 = new Box1(1000,170,20,30);
   b19 = new Box1(1000,170,20,30);
   b20 = new Box1(1000,170,20,30);
   b21 = new Box1(1000,170,20,30);
   b22 = new Box1(1000,170,20,30);
   b23 = new Box1(1000,170,20,30);
   b24 = new Box1(1000,150,20,30);
   b25 = new Box1(1000,150,20,30);
   b26 = new Box1(1000,150,20,30);
   b27 = new Box1(1000,150,20,30);
   b28 = new Box1(1000,150,20,30);
   b29 = new Box1(1000,130,20,30);
   b30 = new Box1(1000,130,20,30);
   b31 = new Box1(1000,130,20,30);
   b32 = new Box1(1000,110,20,30);  

  polygon = new Polygon(150,20,6,30);

  sling = new SlingShot(polygon.body,{x:120,y:30})


}

function draw() {
  background("white");  
  Engine.update(engine);
  strokeWeight(4);

  g1.display();
  g2.display();
  g3.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();
 b21.display();
 b22.display();
 b23.display();
 b24.display();
 b25.display();
 b26.display();
 b27.display();
 b28.display();
 b29.display();
 b30.display();
 b31.display();
b32.display();
polygon.display();
sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
 function keyPressed(){
  if (keyCode === 32 ) {
    polygon.x = 150;
    polygon.y = 20;
     Matter.Body.rotate(polygon.body,45);
    
      sling.attach(polygon.body);
      

  }}