
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ballImage;
var fidgetSpinner,fidgetSpinnerImage;
var leftArrow,leftArrowImage;
var rightArrow,rightArrowImage;
var star,starImage;
var table,tableImage;

function preload() {
ballImage= loadImage("ball.png");
fidgetSpinnerImage= loadImage("fidgetSpinner.jpg");
leftArrowImage= loadImage("leftArrow.png");
rightArrowImage= loadImage("rightArrow.png");
starImage= loadImage("star.png");
tableImage= loadImage("table.jpg");
}

function setup() {
	createCanvas(800, 700);

	
}

function draw(){
  background(255,255,255);

  drawSprites();
}