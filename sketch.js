
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup;
var survivalTime=0;
var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  foodGroup=new Group();
  obstacleGroup=new Group();
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
 
}


function draw() {
background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/40);
  text("Survival Time:"+survivalTime,100,50)
  
  
  
  if(keyDown("space")){
    monkey.velocityY=-3;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }  

 food();
  stones();
  drawSprites()
}
function food(){
  if(frameCount%80===0){
     banana=createSprite(300,250);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    
    banana.velocityX=-3;
    banana.lifetime=120;
       banana.y=Math.round(random(10,340 ));
     foodGroup.add(banana); 
  }
 
}
  
function stones(){
  if(frameCount%300===0){
     obstacle=createSprite(400,349,20,20);
     obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    
     obstacle.setLifetime=150;
    obstacle.collide(ground);
    
  
     obstacleGroup.add(obstacle);
  
  
}

}



