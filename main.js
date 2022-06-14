function setup(){
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = CreateCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose', gp);
}

function ModelLoaded(){
    console.log('Model is Loaded !');
}

function gp(results){
    if
    (results.length > 0)
    {
       console.log(results);   
    }
}