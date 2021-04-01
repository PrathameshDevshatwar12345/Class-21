var fixedRect, movingRect;
var rectangle3,rectangle4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  rectangle3=createSprite(250,300,50,30);
  rectangle3.velocityX=2;
  rectangle4=createSprite(1100,300,40,10);
  rectangle4.velocityX=-2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (collided(movingRect,fixedRect)) {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  
  bounceoff(rectangle3,rectangle4);
  drawSprites();
}

function collided(rect1,rect2) {
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
    && rect1.y - rect2.y < rect2.height/2 + rect1.height/2
    && rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
      return true;
}
else {
  return false;
}
}

function bounceoff(rect1,rect2) {
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2) {
      rect1.velocityX=rect1.velocityX*(-1);
      rect2.velocityX=rect2.velocityX*(-1);
    }

   if (rect1.y - rect2.y < rect2.height/2 + rect1.height/2
    && rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
      rect1.velocityY=rect1.velocityY*(-1);
      rect2.velocityY=rect2.velocityY*(-1);
    } 
}