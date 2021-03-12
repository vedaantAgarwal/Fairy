var starImg, fairyImg, bgImg;
var fairy, fairyVoice;
var star, starBody;
var gameState = START;
var START = 0;
var PLAY = 1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying", fairyImg);
	fairy.scale = 0.25;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true });
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
	background(bgImg);
	if (keyDown("Down_Arrow")) {
		gameState = PLAY;
	}
	if (gameState === PLAY) {
		keyPressed();
		spawnStars();
	}
	drawSprites();
}

function keyPressed() {
	if (keyWentDown("Right")) {
		fairy.velocityX = 3;
	}
	if (keyWentDown("Left")) {
		fairy.velocityX = -3;
	}
}

function spawnStars() {
	if (frameCount % 120 === 0) {
		star = createSprite(random(50, 750), 30);
		star.addImage(starImg);
		star.scale = 0.2;
		star.velocityY = 3;
	}
}
