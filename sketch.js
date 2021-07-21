var backgroundImg,cat1Img,cat2Img,cat3Img,mouse1Img,mouse2Img,mouse3Img;
var cat,mouse;
function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png");
    cat1Img=loadAnimation("images/cat1.png");
    cat3Img=loadAnimation("images/cat4.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png")
    mouse1Img=loadAnimation("images/mouse1.png");
    mouse3Img=loadAnimation("images/mouse4.png");
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(850,600,20,20);
cat.addAnimation("catsleeping",cat1Img);
cat.scale=0.2;
mouse=createSprite(200,600,20,20);
mouse.addAnimation("mousestanding",mouse1Img);
mouse.scale=0.15;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catsitting",cat3Img);
    cat.changeAnimation("catsitting");
    cat.scale=0.2;
    cat.x=300;
    mouse.addAnimation("mousesearching",mouse3Img);
    mouse.changeAnimation("mousesearching");
    mouse.scale=0.1;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-3;
    cat.addAnimation("catrunning",cat2Img);
    cat.changeAnimation("catrunning");
    mouse.addAnimation("mouseteasing",mouse2Img);
    mouse.changeAnimation("mouseteasing");
}

}
