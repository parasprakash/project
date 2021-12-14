var plusbtn=document.querySelector(".plus");
var plusbtn2=document.querySelector(".close");
var closebtnarr1=document.querySelectorAll(".icon.color-3");

//function
// var closebtn = document.querySelector(".icon.color-3");

function plusbtnClick(){
    document.querySelector(".dialog").style.display="flex"
}
function plusbtnClick2(){
    document.querySelector(".dialog").style.display="none"
}
// function closeticket(e){
//     var box=e.target;
//     console.log(box)
// }
function addellogic(){
    var closebtnarr=document.querySelectorAll(".icon.color-3")
    var minimizeicons = document.querySelectorAll(".icon.color-1")

    function closeticket(e){
        var box=e.target.closest(".wrapper .box");
        console.log(box)
        box.style.display="none"
    }
    function minimize(e){
        var box=e.target.closest(".wrapper .box");
        console.log(box)
        if(box.querySelector("main").style.display!="none"){
            box.querySelector("main").style.display="none"
        }
        else{
            box.querySelector("main").style.display="block"
        }
    }
    for (let index = 0; index < closebtnarr.length; index++) {
        const element = closebtnarr[index];
        element.addEventListener("click",closeticket)
        
    }
    for (let index = 0; index < minimizeicons.length; index++) {
        const element = closebtnarr[index];
        element.addEventListener("click",minimize)
        
    }
}
// function closeticket(e){
//     var box=e.target.closest(".box");
//     console.log(box)
//     box.style.display="none"
// }

// function minimize(e){
//     var box=e.closest(".wrapper .box");
//     console.log(box)
//     if(box.querySelector("main").style.display!="none"){
//         box.querySelector("main").style.display="none"
//     }
//     else{
//         box.querySelector("main").style.display="block"
//     }
    
// }
// closebtn.addEventListener("click",closeticket)

for (let index = 0; index < closebtnarr1.length; index++) {
    const element = closebtnarr[index];
    element.addEventListener("click",closeticket)
    
}
plusbtn.addEventListener("click",plusbtnClick)
plusbtn2.addEventListener("click",plusbtnClick2)


function addTicket(){
    plusbtnClick2()//close dialog
    var boxes=document.querySelector(".wrapper main")
    var puranahtml =boxes.innerHTML;
    var boxcontent =document.getElementById("box-content")
    var text =document.getElementById("title");
    boxes.innerHTML =puranahtml+`
    <div class="box">
                <div class="box-header">

                    <div class="box-heading">${text.value}</div>
                    <div class="icon color-1">-</div>
                    <div class="icon color-2">E</div>
                    <div class="icon color-3">X</div>

                </div>
                <main>
                    <textarea name="" id="" cols="30" rows="10">${boxcontent.value}</textarea>
                </main>
            </div>`;
            text.value=""
            boxcontent.value=""
            addellogic()
}
        