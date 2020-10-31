
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustImg, dust ;
function preload(){
	dustImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);
//	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dust = createSprite(800,650,50,50); 
	dust.addImage(dustImg);
    dust.scale = 0.5
	
}


function draw() {
  rectMode(CENTER);
  background(230);
 
	
  Engine.update(engine);
  
  paperObject.display();
  groundObject.display();
  
  
 
  drawSprites();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}





