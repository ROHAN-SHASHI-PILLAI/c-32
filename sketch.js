const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var blower,blowerMouth,ball;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 blower=new Blower(700,300,50,50);
 blowerMouth=new BlowerMouth(650,270,20,20);
 ball=new Ball(700,200,50,50);

 button=createButton("Click to blow")
 button.position(700,350);
 button.class("blowButton")
 button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  
  blower.show();
  blowerMouth.show();
  ball.show();
}

function blow(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}


