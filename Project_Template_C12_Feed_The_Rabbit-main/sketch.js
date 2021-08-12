var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2))

  if (frameCount % 80 === 0){
    if (select_sprites = 1){
      createApples()
    }
      else {
        createLeaves()
      }
    

  }

 rabbit.x = World.mouseX

  drawSprites();
}

function createApples(){

  //code to create apples
  apples = createSprite(random(50,350),40,10,10);
  apples.addImage(appleImg);
  apples.scale = 0.1;
  apples.velocityY = 7;
  apples.lifetime = 300;
}

function createLeaves(){

  //code to create leaves
  leaves = createsprite(random(50,350),40,10,10);
  leaves.addImage(leafImg);
  leaves.scale = 0.1;
  leaves.velocityY = 7;
  leaves.lifetime = 300;
}