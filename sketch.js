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
	star = createSprite(100, 100);
	star.addImage(starImg);
	star.scale = 0.2;
	starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true });
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
	background(bgImg);
	star.x = starBody.position.x;
	star.y = starBody.position.y;
	if (starBody.position.y > 470 && star.y > 470) {
		Matter.Body.setStatic(starBody, true);
	}
	drawSprites();
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		fairy.x = fairy.x + 10;
	}
	if (keyCode == LEFT_ARROW) {
		fairy.x = fairy.x - 10;
	}
	if (keyCode == DOWN_ARROW) {
		Matter.Body.setStatic(starBody, false);
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
