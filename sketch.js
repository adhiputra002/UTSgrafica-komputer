let angle = 0;
let birds = [];

function initBirds() {
  for(let i = 0; i < 5; i++) {
    birds.push({
      x: width + random(200),
      y: 100 + random(100),
      speed: random(1, 3)
    });
  }
}

function setup() {
  createCanvas(800, 600);
   initBirds();
}

function draw() {
  background(135, 206, 235);
  
  fill(255, 255, 0);
  noStroke();
  circle(450, 175, 90);
  
    // Mountains - sekarang berdampingan
  fill(101, 67, 33); // Gunung pertama (coklat lebih terang)
  triangle(00, 400, 350, 150, 600, 400);
  
  fill(139, 69, 19); // Gunung kedua (coklat lebih gelap)
  triangle(300, 400, 550, 200, 800, 400);
  
    
  drawBirds();
}