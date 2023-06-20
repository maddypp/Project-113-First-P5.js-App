function preload() {

}

function setup() {
 canvas = createCanvas(600,600);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 
}

function draw() {
    image(video,160,150,300,250);
    fill(255,0,0);
    stroke(255,0,0);
    circle(100,100,80);
    circle(500,100,80);
    circle(100,500,80);
    circle(500,500,80);

    fill(0,255,0);
    stroke(0,255,0);
    rect(135,80,330,40);
    rect(135,480,330,40);
    rect(82,135,40,330);
    rect(480,135,40,330)
}

function snapshot() {
    save(snapshot.png);
}