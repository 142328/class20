var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3,gameobject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameobject1= createSprite(100,200,80,30);
gameobject1.shapeColor = "green";

gameobject2= createSprite(200,200,80,30);
gameobject2.shapeColor = "green";

gameobject3= createSprite(300,200,80,30);
gameobject3.shapeColor = "green";

gameobject4= createSprite(400,200,80,30);
gameobject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(istouching(movingRect,gameobject1))
  {
    movingRect.shapeColor = "blue";
   gameobject1.shapeColor = "blue";
  }else
  {
    movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
  }

  bounceoff(movingRect,fixedRect);
  
   
  
  
   
  
  drawSprites();
}



 