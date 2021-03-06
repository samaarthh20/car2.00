var car, wall;
 var speed, weight;
  function setup() { 

    createCanvas(800,400); 
    speed=random(55, 90); 
    weight=random(400, 1500); 
    car = createSprite(50, 200, 30, 30); 
    car.shapeColor = "blue"; 
    car.velocityX = speed; 

    wall = createSprite(600, 200, 20, height/2); 
    wall.shapeColor = "purple"; 
  } 
  
  function draw() { 

    background("silver"); 

    if(wall.x-car.x < (car.width+wall.width)/2) { 
      car.velocityX = 0; 
      var deformation=0.5 * weight * speed * speed/22509; 
      if(deformation>180) { 
        car.shapeColor = "red";
       } 
       if(deformation<180 && deformation>100) { 
         car.shapeColor = "yellow"; 
        } 
        if(deformation<100) { 
          car.shapeColor = "green"; 
        } }
         drawSprites(); 
        }
