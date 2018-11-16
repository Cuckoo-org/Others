var n = 0;
var timer = null;
function move(){
    //->在每一次执行方法之前，先把之前设置的没用的定时器清除掉
    window.clearTimeout(timer);
    n++;
    console.log(n);
    if(n === 5){
        return
    }
    //->每一次执行完成后，设置一个新的定时器，过1000ms后再重新执行move“递归”；自己执行的时候重新调用自己再执行
    timer = window.setTimeout(move,1000);
}
 console.log(move());