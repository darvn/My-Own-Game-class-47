var player1, player2, drone;
var backgroundImg, player1Img, player2Img, droneImg, startingBackgroundImg;
var laserSound, explosionSound;
var database;
var gameState = 0;
var playerCount = 0;
var form, game, player;
var wall1, wall2, wall3, wall4, wall5;
var players = []
var droneGroup;


function preload(){
  backgroundImg = loadImage("assets/background.jpg");
  player1Img = loadImage("assets/Player 1.png");
  player2Img = loadImage("assets/Player 2.png");
  droneImg = loadImage("assets/drone.png");
  startingBackgroundImg = loadImage("assets/startingBackground.jpg")
}

function setup() {
  createCanvas(1800, 900);
  database = firebase.database();

  game = new Game();
  game.start();
  game.getState();
}

function draw() {
  background(startingBackgroundImg);

  if(playerCount == 2){
    game.update(1);
  }

  if(keyDown(UP_ARROW)){
    player1.y -= 13;
  }

  if(keyDown(DOWN_ARROW)){
    player1.y += 13;
  }

  if(keyDown(RIGHT_ARROW)){
    player1.x += 13;
  }

  if(keyDown(LEFT_ARROW)){
    player1.x -= 13;
  }


  drawSprites();
}