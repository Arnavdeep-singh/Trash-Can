
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	smolball = new Ball(100,400,20);
	right = new Box(790,430,10,80);
	bottom = new Box(720,470,150,10);
	left = new Box(640,435,10,80);

	floor = new Ground(width/2,500,width,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
  
  drawSprites();
  
  smolball.display();
  right.display();
  bottom.display()
  left.display();
  floor.display();
 
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(smolball.body,smolball.body.position,{x:52,y:-52})
	}
}

