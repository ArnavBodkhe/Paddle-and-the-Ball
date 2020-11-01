var ball,ballImg;

var paddle;paddleImg;

function preload(){
  ballImg= loadImage("download.png");
  paddleImg = loadImage("paddle.jpg")
}

function setup(){
  createCanvas(400,400);
  ball= createSprite(200,200,10,10);
  ball.scale = 0.25;
  ball.addImage("ball1",ballImg);
  ball.velocityX = 4;
  ball.velocityY = 3;

  paddle = createSprite(350,200,10,10);
  paddle.addImage("paddle1",paddleImg);
  paddle.scale = 0.5;
}

function draw(){
  background(250);

  paddle.y = mouseY;

  edges = createEdgeSprites();

  ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

 //ball.bounceOff(3);

  drawSprites();
}