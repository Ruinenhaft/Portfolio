var dark = document.querySelector('.dashboard_dark').getElementsByTagName("img");
var bright = document.querySelector('.dashboard_bright').getElementsByTagName("img");
var red = document.querySelector('.dashboard_red').getElementsByTagName("img");

var dark_click = document.getElementById("dark");
dark_click.addEventListener("click",function(){
    document.querySelector('.dashboard_dark').style.display="block";
    dark[0].style.display="block";
    for(let i=1; i<dark.length;i++){
        dark[i].style.display="none";
    }
    key=0;
    var start = setInterval(() => {
        
        if(key == dark.length-1){
            key=0;
            dark[key].style.display = "block";
            dark[dark.length-1].style.display = "none";
        }else{
            dark[key].style.display = "none";
            dark[key+1].style.display = "block";
            key++;
        }
    }, 3000);
})

var dark_click = document.getElementById("bright");
dark_click.addEventListener("click",function(){
    document.querySelector('.dashboard_dark').style.display="block";
    dark[0].style.display="block";
    for(let i=1; i<dark.length;i++){
        dark[i].style.display="none";
    }
    key=0;
    var start = setInterval(() => {
        
        if(key == dark.length-1){
            key=0;
            dark[key].style.display = "block";
            dark[dark.length-1].style.display = "none";
        }else{
            dark[key].style.display = "none";
            dark[key+1].style.display = "block";
            key++;
        }
    }, 3000);
})

var dark_click = document.getElementById("red");
dark_click.addEventListener("click",function(){
    document.querySelector('.dashboard_dark').style.display="block";
    dark[0].style.display="block";
    for(let i=1; i<dark.length;i++){
        dark[i].style.display="none";
    }
    key=0;
    var start = setInterval(() => {
        
        if(key == dark.length-1){
            key=0;
            dark[key].style.display = "block";
            dark[dark.length-1].style.display = "none";
        }else{
            dark[key].style.display = "none";
            dark[key+1].style.display = "block";
            key++;
        }
    }, 3000);
})