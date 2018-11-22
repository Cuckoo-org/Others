~function(){
  var contonEffect = {
      Linear:function(t,b,c,d){
          return c*t/d+b;
      }
  };
  //->move:实现多方向的运动动画 curEle->当前要操作运动的元素 target->当前动画的目标位置,存储的是每一个方向的目标位置{left:xxx,top:xxx ....},duration当前动画的总时间
  function move(curEle,target,duration,callBack){
    //->在每一次执行方法之前，首先把当前元素之前正在运行的动画结束掉
    window.clearInterval(curEle.contonTimer);

   //->根据target获取每一个方向的起始值begin和总距离change
    var begin = {},change = {};
    for(var key in target){
        if(target.hasOwnProperty(key)){
            begin[key] = utils.css(curEle,key);
            change[key]=target[key]-begin[key];
        }
    }
    //->实现多方向的运动动画
     var time = 0;
     curEle.contonTimer=window.setInterval(function(){
         time+=10;
         //->到达目标：结束动画，让当前元素的样式等于目标样式值
         if(time>=duration){
             utils.css(curEle,target);
             window.clearInterval(curEle.contonTimer);
            //->当动画结束时候，如果用户把回调函数传递给我了，我就把用户传递的那个函数执行,不仅执行还让回调函数中的this变为当前要操作的元素
           callBack && callBack.call(curEle);
             return;
         }
         //->没到达目标：分别获取每一个方向的当前位置，给当前元素设置样式即可
         for(var key in target){
            if(target.hasOwnProperty(key)){
                var curPos = contonEffect.Linear(time,begin[key],change[key],duration);
                utils.css(curEle,key,curPos)
            }
         }
        },10)
 }
 window.contonAnimate = move;
}();