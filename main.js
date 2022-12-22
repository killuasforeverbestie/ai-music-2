song1="";
song2="";

function preload(){

}

function setup(){
canvas = createCanvas(600,500);
canvas.position(1000,400);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,600,500)
}