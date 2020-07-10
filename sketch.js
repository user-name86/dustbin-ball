var paper1,ground, dustbin1;
var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(150,350,50);
	ground = new Ground(10,680,800,20);
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  keyPressed();
  paper1.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:0,y:-5});
	}
}

