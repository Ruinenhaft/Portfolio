var flag=0;

var dark = document.querySelector('.dashboard_dark').getElementsByTagName("img");
var bright = document.querySelector('.dashboard_bright').getElementsByTagName("img");
var red = document.querySelector('.dashboard_red').getElementsByTagName("img");
var blue = document.querySelector('.dashboard_blue').getElementsByTagName("img");

function print_img(color){
    if(flag == 0){
        flag = 1;
        
        color[0].style.display="block";
        for(let i=1; i<color.length;i++){
            color[i].style.display="none";
        }
        key=0;
        var start = setInterval(() => {
            
            if(key == color.length-1){
                key=0;
                color[key].style.display = "block";
                color[color.length-1].style.display = "none";
            }else{
                color[key].style.display = "none";
                color[key+1].style.display = "block";
                key++;
            }
        }, 3000);
    }
    else{
        location.reload();
    }
}


var dark_click = document.getElementById("dark");
dark_click.addEventListener("click",function(){
    document.querySelector(".dashboard_main").style.display="none";
    document.querySelector('.dashboard_dark').style.display="block";
    print_img(dark);
})

var bright_click = document.getElementById("bright");
bright_click.addEventListener("click",function(){
    document.querySelector(".dashboard_main").style.display="none";
    document.querySelector('.dashboard_bright').style.display="block";
    print_img(bright);
})

var red_click = document.getElementById("red");
red_click.addEventListener("click",function(){
    document.querySelector(".dashboard_main").style.display="none";
    document.querySelector('.dashboard_red').style.display="block";
    print_img(red);

})

var red_click = document.getElementById("blue");
red_click.addEventListener("click",function(){
    document.querySelector(".dashboard_main").style.display="none";
    document.querySelector('.dashboard_blue').style.display="block";
    print_img(blue);

})