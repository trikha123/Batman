const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    
}

function setup(){
    engine = Engine.create();
    drop1 = new Drops(200, 200)
   
    
}

function draw(){
    Engine.update(engine);
    background("black")

    drop1.display();
    
}   

