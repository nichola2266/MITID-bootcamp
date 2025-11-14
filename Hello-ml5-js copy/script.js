// Your variables go here
//vidoe a variable to store the video elements
let video;
// a variable to store the bodypose model
let bodyPose;
//a variable to store the results
let poses = [];

let hornsImg;
let hornOffsetY = 150;
let hornScale = 1.3;


function preload() {
    // Load ressources before setup
    bodyPose = ml5.bodyPose();
    hornsImg = loadImage('assets/deerhorns.png');
}


function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
    frameRate(15); // set a lower framerate

    video = createCapture(VIDEO);
    video.hide();

    // start the model detection
    bodyPose.detectStart(video, function(results){
        // store the results in a global variable
        poses = results;
        })

}

function draw() {
    // Code that runs repeatedly code here
    // background(200);
    image(video, 0,0);

    // make sure we can detect at least one code
    if(poses.length > 0 ){
        // target nose position
        let nose= poses[0].nose;
        console.log(nose);

        // draw a circle on the nose
        fill(255, 0, 0);
        circle(nose.x,nose.y, 35);

        
        // deer horns calcualte head center for horns
        let headX = (leftEye.x + rightEye.x) / 2;
        let headY = (leftEye.y + rightEye.y) / 2;

        // estimte horn size based on face width
        let hornWidth = distance * 3 * hornScale;
   

        //Load deer horns 
        image( hornsImg, headX - 150, headY - 275, 250 , 250);
    }
}


function mousePressed(){
    console.log(poses);
   
}