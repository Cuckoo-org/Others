//->实现焦点跟随图片切换，先获取到所有的li为oLia
function changeTip(){
    var tempStep = step>=oLis.length?0:step;
    for(var i = 0;len=oLis.length,i<len;i++){
         var curLi = oLis[i];
         i===tempStep? utils.addClass(curLi,"bg"):utils.removeClass(curLi,"bg");
    }
}

//->停止和开启自动轮播
banner.onmouseover = function() {
    window.clearInterval(autoTimer);
};
banner.onmouseout = function(){
    autoTimer = window.setInterval(autoMove,interval)
};
//->点击焦点切换
~function(){//->自执行函数
    for(var i = 0;len=oLis.length,i<len;i++){
        var curLi = oLis[i];
        curLi.index = i;
        curLi.onclick = function(){
            step = this.index;
            changeTip();
            contonAnimate(bannerInner,{left:-step*1000},500)
        }
   }
}
