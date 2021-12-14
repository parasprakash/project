var btnarr=document.querySelectorAll("button")
for(var i=0;i<btnarr.length;i++){
    btnarr[i].innerText=i+1
    btnarr[i].style.height="100px"
    btnarr[i].style.width="100px"
    if(i%3==0){
       btnarr[i].style.background="pink"; 
    }

function invisible(e){
    e.target.style.display="none"
}
btnarr[i].addEventListener("mouseenter",invisible)
btnarr[i].addEventListener("mouseleave",invisible)
  
}
