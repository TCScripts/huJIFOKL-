function preload(){
    //clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    
}
function setup(){
    canvas=createCanvas(600, 600);
    canvas.center();
 video= createCapture(VIDEO);
 video.size(600, 600);
 video.hide();
 poseNet=ml5.poseNet(video, modelloaded);
 poseNet.on('pose', gotposes);
}
function modelloaded(){
    console.log('modelloaded');
}
nose_x=0;
nose_y=0;
function gotposes(results){
    if(results.length>0){
        nose_x=results[0].pose.nose.x-50;
        nose_y=results[0].pose.nose.y-15;
    }
}
function draw(){
    image(video, 0, 0, 600, 600);
    image(clown_nose, nose_x, nose_y, 100, 100);
}
function take_snapshot(){
    save('you');

}