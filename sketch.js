var  box 

function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 50, 50);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
  }

  if(keyDown(LEFT_ARROW)) {
    box.x = box.x - 5;
  }
  if(keyDown(UP_ARROW)) {
    box.y = box.y - 5;
  }
  if(keyDown(DOWN_ARROW)) {
    box.y = box.y + 5;
  }

  drawSprites()
}




