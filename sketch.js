
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(3,3,100);
	
	ground = new Ground(675,590,1350,20);

	side0 = new Dustbin(915, 530, 20, 100);
     side1 = new Dustbin(850, 570, 150, 20);
     side2 = new Dustbin(780, 530, 20, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  paper.display();
  ground.display();

  side0.display();
  side1.display();
  side2.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:480, y: -480})
	}

  }


