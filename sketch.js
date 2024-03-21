class Walker { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-15,5), random(-5,15)) 
    this.acceleration = createVector(0,0); 
  }
  
  
  display(){ 
    strokeWeight(3); 
    fill(0,100,0); 
    rect(this.location.x, this.location.y, 35, 45); 
    point(this.location.x+10, this.location.y+13);
    point(this.location.x+25, this.location.y+13);
    line(this.location.x+13, this.location.y+10, this.location.x+5, this.location.y+5)
    line(this.location.x+22, this.location.y+10, this.location.x+30, this.location.y+5)
    line(this.location.x+11, this.location.y+45, this.location.x+11, this.location.y+60)
    line(this.location.x+25, this.location.y+45, this.location.x+25, this.location.y+60)
    line(this.location.x, this.location.y+20, this.location.x-15, this.location.y+30)
    line(this.location.x+35, this.location.y+20, this.location.x+50, this.location.y+30)
    arc(this.location.x+17, this.location.y+25,15, 8, 10,-110)
  } 
  
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 5
    dir.normalize(); 
    dir.mult(0.1); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
  
   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 
   
    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let walker = [];
let mouse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<20;i++){
    walker[i] = new Walker(random(windowWidth), random(windowHeight));   
  }
 
}

function draw() {
  background(0,1000,0);
      
  fill('white')
      ellipse(mouseX, mouseY, 20,60)
      ellipse(mouseX, mouseY-35, 20,20)
      line(mouseX-20, mouseY+10, mouseX-11, mouseY-10)
      line(mouseX+20, mouseY+10, mouseX+11, mouseY-10)
      line(mouseX-3, mouseY+30, mouseX-5, mouseY+50)
      line(mouseX+3, mouseY+30, mouseX+5, mouseY+50)
    for (let i=0; i<20;i++){
      walker[i].cekUjung(); 
      walker[i].display(); 
      walker[i].update();    
  }
  
  
}