const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight = 300;

var score = 0;
var gamestate = "playing";
var chances = 10;

var i = 0;

function preload(){
}

function setup() {
	createCanvas(480, 800);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground (240, 785, 480, 30);

	for (var k = 0; k <=width; k = k + 80) {
	   divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }
   
   wall1 = new Division(0,250,5,550);
   wall2 = new Division(480,250,5,550);

	for (var j = 40; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 40; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 15; j <=width-10; j=j+50){ 
       plinkos.push(new Plinko(j,375));
    }

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  push();
  fill("#70d1f4");
  textSize(20);
  stroke("cyan");
  strokeWeight(2);
  text("Score - "+ score, 140,30);
  text("Chances - "+ chances,10,30);
  pop();
  
  ground.display();
  wall1.display();
  wall2.display();

  for (var i = 0; i < divisions.length; i++) {
     divisions[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

  if(frameCount % 60 === 0 && gamestate == "playing"){
   particles.push(particle = new Particles(random(20, 380), 10,10));
   chances = chances -1;
  }

  if(chances == 0){
     gamestate = "end";
  }

  if(gamestate == "end"){
   push();
   fill("#70d1f4");
   textSize(50);
   stroke("cyan");
   strokeWeight(2);
   text("Game Over",100,300);
   pop();
  }

 for (i = 0; i < particles.length; i++){ 
  particles[i].display();

  if(particles[i].body.position.y >500 && particles[i].body.velocity.y > 3  && particles[i].body.position.y <710){
     Score();
   } 
  }

  drawSprites();
}

function Score(){
   score = score + Math.round(random(125,200));
 }