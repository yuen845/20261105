let spriteSheet;

function preload() {
  spriteSheet = loadImage('jump/jump ALL.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let frameCount = 0;
const totalFrames = 4;
const frameWidth = 183 / 4; // 45.75
const spriteHeight = 42;
const animSpeed = 8; // 每 8 個影格切換一張

function draw() {
  background('#ffc8dd');

  frameCount++;
  const currentFrame = floor(frameCount / animSpeed) % totalFrames;

  const img = spriteSheet.get(currentFrame * frameWidth, 0, frameWidth, spriteHeight);
  image(img, width / 2 - frameWidth / 2, height / 2 - spriteHeight / 2);
}
