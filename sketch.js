var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(800,400);
  speed=random(111,445);
  weight=random(30,52);
 bullet=createSprite(0, 200, 10, 5);
 bullet.velocityX=(speed);
 wall=createSprite(600,200,thickness,height/2);
 thickness=random(22,83);
 wall.shapeColor="grey";
 bullet.shapeColor="black";
}

function draw() {
  background(255,255,255);  

 if (hasCollided(bullet,wall))
 {
  bullet.velocityx-0;
  var damage=0.5*weight*speed/(thickness*thickness*thickness)

if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
}



  drawSprites();

}

function hasCollided(mybullet,mywall)
{
   bulletRightEdge=mybullet.x+mybullet.width;
   wallLeftEdge=mywall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false;
}





