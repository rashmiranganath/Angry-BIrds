let ground;
let box;
let bird;
let angry_bird;


function preload(){
    angry_bird = loadImage('image.png');
}


function setup(){
    createCanvas(600,400);
  
    // fill(12,64,43);
    ground = new Ground(0,height-20,width,20);
    // fill(3);
    box = new Box(450,300,50,75);
    box2 = new Box(350,300,50,75);
    box3 = new Box(400,230,50,75);
    // bird = new Bird(50,300,75);
    // angry_bird = loadImage('download.png');
}
function draw(){
    background(300);
    // fill(130);
    ground.show();
    box.show();
    box2.show();
    box3.show();
    // bird.show();
    image(angry_bird,30,250);
}