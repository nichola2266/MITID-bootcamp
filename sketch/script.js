// Your variables go here

// a variable to store the video
let video;
//a variable to store the model 
let bodyPose;
// a variable to store led
let poses =[];

// variable name to store the bottom servo
let oneservo;
// variable name to store the middle servo
let twoservo;
// variable name to store the upper servo
let threeservo;




function preload() {
    // Load ressources before setup
    //load the bodyPose model
    bodyPose = ml5.bodyPose();

    //load the arduino board
    loadBoard();
}



function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

     //start capture video
    video=createCapture(VIDEO);

    //hide video element
    video.hide();

    //start bodyPose detection
    bodyPose.detectStart(video, function(results){
        // make the results from the model globally accessible 
        poses = results;

    });

    // create the vertical  object onpin 3
    oneservo = new five.Servo(6);   
    twoservo = new five.Servo(3);   
    threeservo = new five.Servo(5);   



}


function draw() {
    // Code that runs repeatedly code here
    // background(200);
    // display video on x and y coordinates
    image(video,0,0);


    if(poses.length > 0){
        //create a variable to store the wrist pose on the x axis only
        let nose = poses[0].nose.y;
        let angleNose = map(nose, 0, 500,40,120);
        oneservo.to(angleNose);

        //create second arm
        let leftWristy = poses[0].left_wrist.y;
        let angleLWristy = map(leftWristy, 0, 500,0,180);
        twoservo.to(angleLWristy);

        // create third arm
        let rightWristx = poses[0].right_wrist.y;
        let angleRWristx = map(rightWristx, 0, 500,0,180);
        threeservo.to(angleRWristx);
    }
}