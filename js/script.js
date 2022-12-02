var button=document.getElementById("autoscrollon");
var button2=document.getElementById("autoscrolloff");

function pageScroll(){
        clearTimeout(scroll);
        window.scrollBy(0,1);
        scroll=setTimeout(pageScroll,10);
}

function stopScroll(){
    clearTimeout(scroll);
}

button.addEventListener("click",pageScroll);
button2.addEventListener("click",stopScroll);
