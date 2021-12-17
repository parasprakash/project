var paddleheight=150
var paddlewidth=30
var ballradius=25
var halfpaddleheight=paddleheight/2
var speedofpaddle1=0
var speedofpaddle2=0
var positionofpaddle1=200
var positionofpaddle2=200
var toppositionofball=320
var leftpositionofball=600
var topspeedofball=10
leftspeedofball=0
var score1=0
var score2=0

function startball(){
    toppositionofball=320
    leftpositionofball=600
    if(Math.random() <.5){
        var dir=1
    }
    else{
        var dir=-1
    }
    leftspeedofball=dir*(Math.random()*5+5);
    topspeedofball=(Math.random()*5+5);
}

document.addEventListener('keydown',function(e){
    if(e.key=='w'){
        speedofpaddle1=-10;
    }
    if(e.key=='s'){
        speedofpaddle1=10;
    }
    if(e.key=='p'){
        speedofpaddle2=-10;
    }
    if(e.key=='l'){
        speedofpaddle2=10;
    }
})
document.addEventListener('keyup',function(e){
    if(e.key=='w'){
        speedofpaddle1=0;
    }
    if(e.key=='s'){
        speedofpaddle1=0;
    }
    if(e.key=='p'){
        speedofpaddle2=0;
    }
    if(e.key=='l'){
        speedofpaddle2=0;
    }
})
window.setInterval(function show(){
    positionofpaddle1+=speedofpaddle1
    positionofpaddle2+=speedofpaddle2
    toppositionofball+=topspeedofball
    leftpositionofball+=leftspeedofball

    if(positionofpaddle1<=1){
        positionofpaddle1=1;
    }
    if(positionofpaddle2<=1){
        positionofpaddle2=1;
    }
    if(positionofpaddle1>=window.innerHeight-paddleheight){
        positionofpaddle1=window.innerHeight-paddleheight
    }
    if(positionofpaddle2>=window.innerHeight-paddleheight){
        positionofpaddle2=window.innerHeight-paddleheight
    }
    if(toppositionofball<=10 || toppositionofball>=window.innerHeight-ballradius){
        topspeedofball=-topspeedofball;
    }
    if(leftpositionofball<=paddlewidth){
        if(toppositionofball>positionofpaddle1 && toppositionofball<positionofpaddle1+paddleheight){
            leftspeedofball=-leftspeedofball;
        }
        else{
            startball();
        }
    }
    if(leftpositionofball>=window.innerHeight-paddlewidth-ballradius){
        if(toppositionofball>positionofpaddle2 && toppositionofball<positionofpaddle2*paddleheight){
            leftspeedofball=-leftspeedofball;
        }
    }
    document.getElementById("paddle1").style.top=positionofpaddle1+"px";
    document.getElementById("paddle2").style.top=positionofpaddle2+"px";
    document.getElementById("ball").style.top=toppositionofball+"px";
    document.getElementById("ball").style.left=leftpositionofball+"px";

},1000/50)
