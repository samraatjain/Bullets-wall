var bullet,thickness,wall;
var speed,weight;
var x=2;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(22,21)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="red"
  wall=createSprite(500,200,thickness,250/2);
  wall.shapeColor="gray"
}


function draw() {
  background(0); 
  bullet.velocityX=speed;
  
  if(bullet.x-wall.x<wall.width/2+bullet.width/2
    && wall.x-bullet.x<wall.width/2+bullet.width/2
    && bullet.y-wall.y<wall.height/2+bullet.height/2
    && wall.y-bullet.y<wall.height/2+bullet.height/2) 
    {
    
      bullet.velocityX=0;
    }
    
  bullet.display();
  wall.display();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  {
    return false
  }
}
if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}
if(damage>10)
{
  wall.shapeColor=color("red");
}
if (damage<10)
{
  wall.shapeColor=color("green");
}
