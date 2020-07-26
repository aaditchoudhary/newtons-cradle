
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var board;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	board=createSprite=(200,200,100,100);
	ball=createSprite=(200,300,100,100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(242, 7, 183);
  board.display();
  ball.display();
  

  
  rope = new Rope(ball.body,{x:200, y:200});
  drawSprites();
 
}



