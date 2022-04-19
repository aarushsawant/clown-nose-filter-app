nosex=0;
nosey=0;
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotResults);
}

function preload()
{
    clown_nose=loadImage('https://i.postimg.cc/j5Zw02ZX/Clown-nose-large.webp');
}

function captureMe()
{
    save('myfilter.png');
}

function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,50,50);
}

function modelLoaded()
{
    console.log('modelLoaded')
}

function gotResults(results)
{
    if (results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-20;
        nosey=results[0].pose.nose.y-20;
    }
}