//->实现轮播图在一段时间内自动播放
var step = 0;//->设定步长
var autoTimer = window.setInterval(autoMove,2000);
function autoMove(){
    if(step >= (count-1)){//->count是总共几张图片的总长
        step=0;
       bannerInner.style.left = 0;
    }
    step++;
    contonAnimation(banner,{left:-step*1000},500)
}