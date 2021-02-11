var canvas,box1,box2,box3,box4,ball;
var music,sound,wall1,wall2,wall3,wall4,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

     box1=createSprite(90,585,180,30);
     box1.shapeColor="red";

     box2=createSprite(290,585,180,30);
     box2.shapeColor="yellow";

     box3=createSprite(490,585,180,30);
     box3.shapeColor="green";

     box4=createSprite(690,585,180,30);
     box4.shapeColor="blue";

     wall1=createSprite(400,0,800,20);
     wall1.visible=false;

     wall2=createSprite(400,600,800,20);
     wall2.visible=false;

     wall3=createSprite(0,300,20,600);
     wall3.visible=false;


     wall4=createSprite(800,300,20,600);
     wall4.visible=false;



     ball=createSprite(random(20,750),50,30,30);
     ball.shapeColor="white";
    //create 4 different surfaces

    

    
ball.velocityX=6;
ball.velocityY=6;



    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));

    edges=createEdgeSprites();


 //createEdgeSprite();


 if(ball.x-box1.x < ball.width/2+box1.width/2 && 
    box1.x-ball.x < ball.width/2+box1.width/2 
     && ball.y-box1.y < ball.height/2+box1.height/2
     && box1.y-ball.y < ball.height/2+box1.height/2){
        ball.shapeColor="red";
       ball.velocityY=ball.velocityY*-1;
       music.play();
       
     }
     

     
 if(ball.x-box2.x < ball.width/2+box2.width/2 && 
    box2.x-ball.x < ball.width/2+box2.width/2 
     && ball.y-box2.y < ball.height/2+box2.height/2
     && box2.y-ball.y < ball.height/2+box2.height/2){
        ball.shapeColor="yellow";
       ball.velocityY=0;
       ball.velocityX=0;
       music.stop();
    
     }
     

     
 if(ball.x-box3.x < ball.width/2+box3.width/2 && 
    box3.x-ball.x < ball.width/2+box3.width/2 
     && ball.y-box3.y < ball.height/2+box3.height/2
     && box3.y-ball.y < ball.height/2+box3.height/2){
        ball.shapeColor="green";
       ball.velocityY=ball.velocityY*-1;
       music.play();
       
     }
     

     
 if(ball.x-box4.x < ball.width/2+box4.width/2 && 
    box4.x-ball.x < ball.width/2+box4.width/2 
     && ball.y-box4.y < ball.height/2+box4.height/2
     && box4.y-ball.y < ball.height/2+box4.height/2){
        ball.shapeColor="blue";
       ball.velocityY=ball.velocityY*-1;
       music.play();
       
     }
     

    ball.bounceOff(edges);
    //create edgeSprite


drawSprites();
    //add condition to check if box touching surface and make it box
}
