
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
gamestate="start";
var monkeyY;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
monkeyY=loadImage("sprite_0.png");
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(40,340,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.09;
  ground=createSprite(300,385,800,40);
  ground.velocityX=-3;
  FoodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
background(220);
  
  if(gamestate=="start"){
  spawnObstacles();
  spawnFood();
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
 
  }
  
  if(keyDown("space")&&monkey.y>=335&&gamestate=="start"){
   monkey.velocityY=-20;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  if(ground.x<0){
   ground.x=200;
  }
  monkey.collide(ground);
  
  if(monkey.isTouching(obstacleGroup)){
    gamestate="end";
  }
  
  if(monkey.isTouching(FoodGroup)&&gamestate=="start"){
    FoodGroup.destroyEach();
  }
  
  if(gamestate=="end"){
    monkey.velocityY=20;
    ground.velocityX=0;
  }
    
  drawSprites();
}


function spawnFood(){
  if(World.frameCount%80==0){
  var rando=Math.round(random(120,200));
  banana=createSprite(410,rando,20,20);
  banana.addImage("banana",bananaImage);
  FoodGroup.add(banana);
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.lifetime=100;
}
}

function spawnObstacles(){
   if(World.frameCount%300==0){
  obstacle=createSprite(410,360,20,20);
  obstacle.addImage("obstacle",obstacleImage);
  obstacleGroup.add(obstacle);
  obstacle.scale=0.2;
obstacle.velocityX=-4;
obstacle.lifetime=110;
} 

}















