var car,wall
function setup() {
  createCanvas(1200,400);
 car = createSprite(100, 200, 30, 30);
 wall = createSprite(1100,200,30,200);

 speed = random(55,90);
 weight = random(400,1500);
 car.velocityX = speed;


}

function draw() {
  background("black");  
  if(wall.x-car.x<wall.width/2 + car.width/2){
    deformation = 0.5*weight*speed*speed/22500;
    if(deformation<80){
      car.shapeColor="green";
     car.velocityX=0;

    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
     car.velocityX=0;
     
    }
    if(deformation>180){
      car.shapeColor="red";
     car.velocityX=0;
     
    }
  }
  drawSprites();
}