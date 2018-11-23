(function(){
   var banner = document.getElementById("banner"),bannerInner = utils.firstChild(banner);


  //->1、Ajax数据请求、
  var jsonDate = null;
  ~function(){
    var xhr = new XMLHttpRequest;
    xhr.open("get","json/banner.txt?_="+Math.random(),false);
    xhr.onreadystatechange=function(){
      if(xhr.readyState === 4 &&/^2\d{2}$/.test(xhr.status)){
        jsonDate = utils.formatJSON(xhr.responseText)
      }
    };
    xhr.send(null);
  }();

  //->2、按照字符串拼接的方式绑定数据
  ~function(){
    var str = '';
    if(jsonDate){
      for(var i = 0;len = jsonDate.length;i++) {
        var curDate = jsonDate[i];
        str += '<img src ="'+ curDate["images"]+'"/>';
      }
    }
    bannerInner.innerHTML=str;
  }()
})();