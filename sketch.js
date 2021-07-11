const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground;
var divisions = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];

function preload(){

}

function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,690,800,20);

  for(var k = 0; k <= width; k = k+80){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for(var j = 75; j = width; j = j+50){
      plinkos.push(new Plinkos(j,75));
  }
  for(var j = 50; j <= width-10; j = j+50){
    plinkos.push(new Plinkos(j,175));
  }
  for(var j = 75; j<= width; j = j+50){
    plinkos.push(new Plinkos(j,275));
  }
  for(var j = 50; j<= width-10; j =j+50){
    plinkos.push(new Plinkos(j,375));
  }

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);  

  drawSprites();

  for(var n = 0; n<divisions.lenght; n++){
    divisions[n].display();
  }
  if(frameCount%60 === 0){
    particles.push(new Particles(random(width/2-30, width/2+30),10,10));
  }
  for(var h = 0; h<particles.length; h++){
    particles[h].display();
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  ground.display();
}