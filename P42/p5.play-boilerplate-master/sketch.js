var hr, mn , sc;
var hrAngle , mnAngle , scAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
translate(200,200)
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();

  background(255,255,255);  
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360) 

  push();
  rotate(scAngle);
  stroke(31,144,185,255)
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(3,51,109,255)
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(183,232,237,255)
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}