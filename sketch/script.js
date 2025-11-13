// Your variables go here

// a variable to store the video
let video;
//a variable to store the model 
let bodyPose;
// a variable to store led

// variable name to store the bottom servo
let oneservo;
// variable name to store the middle servo
let twoservo;
// variable name to store the upper servo
let threeservo;

let poses =[];


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
        let rightwrist = poses[0].right_wrist.x;
        let anglerightwrist = map(rightwrist, 0, 500,40,120);
        oneservo.to(anglerightwrist);

        //create second arm
        let leftwrist = poses[0].left_wrist.x;
        let angleleftwrist = map(leftwrist, 0, 500,0,180);
        twoservo.to(angleleftwrist);

        // create third arm
           let nose = poses[0].nose.x;
        let anglenose = map(nose, 0, 500,0,180);
        threeservo.to(anglenose);
    }
}