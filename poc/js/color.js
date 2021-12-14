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
        setColorarr[index].style.display="block"
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

function reset(e){
    for (let index = 0; index < setColorarr.length; index++) {
        setColorarr[index].style.display="block"        
    }
}
bluebtn.addEventListener("click",blue)
greenbtn.addEventListener("click",green)
redbtn.addEventListener("click",red)
resetbtn.addEventListener("click",reset)