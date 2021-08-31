
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
}

	ball=Matter.Bodies.circle(100,height/3-100,2,ball_options);
	World.add(world,this.ball);

	groundObj=new Ground(width/2,670,width,20);

	leftSide=new Ground(900,600,20,120);
	rightSide=new Ground(1100,600,20,120)


	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
	Engine.update(engine);
  background(0);
  ellipseMode(RADIUS)

  ellipse(ball.position.x,ball.position.y,20);
  
  groundObj.show();
  leftSide.show();
  rightSide.show();
  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce({x:0,y:0},{x:0.06,y:-0.03})
	}
}

