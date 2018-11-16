var n = 0;
var timer = window.setInterval(function(){
    n++;
    console.log(n);
    if(n === 5){
        window.clearTimeout(timer);
    }
},1000)