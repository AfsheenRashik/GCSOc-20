var car,re,blu,yello,gree,wall;
var speed,weight;
function preload(){
re = loadImage("redcar.png");
blu = loadAnimation ("blucar.jpg");
gree= loadImage("grcar.jpg");
yello  = loadImage("yellowc.png");
}

function setup() {
  createCanvas(1600,400);
  speed = random(50,90);
  weight = random(400,1500)
  car=createSprite(50, 200, 50, 50);
  car.addAnimation("ac",blu);
 wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "yellow";
  car.velocityX = speed;

}

function draw() {
  background("white");
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    var deformation  = 0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.addImage("r",gree);
    }
    if(deformation>100&&deformation<180){
     car.addImage("we",yello);
    }
    if(deformation>180){
      car.addImage("br",re);
    }
  }
  
  drawSprites();
}