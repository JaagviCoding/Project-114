function preload()
{

}
function setup()
{
    canvas = createCanvas(640,520);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    
    fill("white")
    stroke("green")
    rect(30, 20, 580, 450);
    image(video,250,180,150,150);
    fill("red");
    stroke("red");
    circle(60,60, 80);
    circle(580,60, 80);
    circle(580,450, 80);
    circle(60,450, 80);
    
}
function take_snapshot()
{
    save("Jaagvi.png");
}