  var car;
  var wall;
  var speed;
  var weight;


function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,20,20);
  wall=createSprite(700,200,60,height/2);
  car.velocityX=speed;
}

function draw() {
  background("black");  
  if (car.isTouching(wall)){
    car.collide("wall");
  }

  drawSprites();
}