const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var canvas,angle, tower, ground, cannon;

var tower;

function preolad(){


  background = loadImage ("./assets/background.gif");

  towerImage = loadImage ("./assets/tower.png");

}






function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;



  angle = -PI / 4;


  tower = new Tower (150, 350, 360,310);
  Cañon = new cañon (180,350, 360, 310, angle);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
 

  image(backgroundImg, 0, 0, width, height);


  Engine.update(engine);





 Cañon.display();
  tower.display();




 
}

