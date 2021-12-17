var color=['blue','green','red']
var setColorarr=document.querySelectorAll(".box div")
var bluebtn=document.querySelector(".blue")
var greenbtn=document.querySelector(".green")
var redbtn=document.querySelector(".red")
var resetbtn=document.querySelector(".reset")
setcolor()
function setcolor(e){
    for (let index = 0; index < setColorarr.length; index++) {
        setColorarr[index].innerHTML=index+1
        setColorarr[index].style.background=color[Math.floor(Math.random() * 3)]
        
    }
}

function blue(e){
    for (let index = 0; index < setColorarr.length; index++) {  
        if(setColorarr[index].style.background!="blue"){
            setColorarr[index].style.display="none"
        }
        
    }
}

function green(e){
    for (let index = 0; index < setColorarr.length; index++) {
        setColorarr[index].style.display="block"
        if(setColorarr[index].style.background!="green"){
            setColorarr[index].style.display="none"
        }
        
    }
}

function red(e){
    for (let index = 0; index < setColorarr.length; index++) {
        setColorarr[index].style.display="block"
        if(setColorarr[index].style.background!="red"){
            setColorarr[index].style.display="none"
        }
        
    }
}
function one(e){
    for (let index = 0; index < setColorarr.length; index++) {
        // e.target.getAttribute("class","blue")
        // setAttribute
    }
}

function reset(e){
    for (let index = 0; index < setColorarr.length; index++) {
        setColorarr[index].style.display="block"        
    }
}
bluebtn.addEventListener("click",one)
greenbtn.addEventListener("click",one)
redbtn.addEventListener("click",one)
resetbtn.addEventListener("click",reset)