var car1,wall;
function setup() {
  createCanvas(800,400);
  //car1= new car(50,2260,60,"red");
  //car2= new car(150,1522,50,"red");
wall=createSprite(200,200,50,50);
wall.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  if(touches.length>0)
  {
    //wall.x=touches[0].x;
    //wall.y=touches[0].y;
    if (touches[0].x>wall.x)
    {
      wall.velocityX=2;
    }
    if (touches[0].x<wall.x)
    {
      wall.velocityX=-2;
    }

   //  if (touches[0].x=wall.x &&touches[0].y>wall.y)
    //{
      //wall.velocityY=2;
   // }
    //if (touches[0].x=wall.x && touches[0].y<wall.y)
    //{
      //wall.velocityY=-2;
    //}
    

    
    
    touches=[];
  }
 
//car1.bounceoff(wall,car1);
//car2.bounceoff(wall,car2);
    drawSprites();
}