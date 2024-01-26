nosex=0
nosey=0
function setup(){
    canvas=createCanvas(550,500);
    canvas.position(670,100);
    video=createCapture(VIDEO)
    video.hide()
    video.size(550,500)
    posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes)
}

function modelloaded(){
    console.log("modelloaded")
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
    }
}