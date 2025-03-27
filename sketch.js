function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('rgb(164,224,240)');
  stroke('whithe');
  fill('withe');
    rect(50, 50, 75, 100, 20);
    rect(30, 20, 55, 100, 20);
      rect(250, 50, 75, 100, 20);
    rect(280, 20, 55, 100, 20);
  stroke('rgb(92,211,92)');
  strokeWeight('3');
  fill('lightgreen');
  rect(0, 300, 500, 100);
    stroke('black');
  fill('blue');
    rect(100, 350, 205, 100, 20);
    stroke('#FFC107');
  strokeWeight('4');
  fill('rgb(255,255,122)');
  circle(200 ,200 ,300);///rosto
    stroke('#F44336');
  strokeWeight('4');
  fill('rgb(255,135,62)');
  triangle(200,100,170,220,230,220);//nariz
  line(150,270,250,270);//boca
  stroke('black');
  strokeWeight('4');
  fill('black');
olhoX = map(mouseX, 0, 400, 120, 170);
olhoY = map(mouseY, 0, 400, 120, 170);
  
  circle(olhoX,olhoY,10);
    circle(olhoX + 100,olhoY,10);
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
  }
}
