var x = 0;
var y = 5;

function setup(){
    createCanvas(1920,1080);
    //background('#FFDEF7');

}

function draw(){
    background('#DEFFFD');
    rect (x,y,10,10);
    x = x + 1;
    x = x % 720;
    y = y + 0.5;
    y = y % 470;

    rect (5,5,10,10);
    rect (15,20,10,1);
    rect (25,5,10,10);

}