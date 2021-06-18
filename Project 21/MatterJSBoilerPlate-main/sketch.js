
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
        friction:0,
		density:1.2
	}

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);

	Matter.Bodies.circle(x, y, radius, [options], [maxSides])
    World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.show();
  leftSide.show();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

	}
}



