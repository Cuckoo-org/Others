###DOM盒子模型
如下：
```javascript
var oDiv = document.getElementById("div1");
console.log(oDiv.getElementsByTagName
("span"));
```
> 下面写的所有方法在jQuery中的作用和方法名一模一样
> function chlidren ->获取某一个容器中所有的元素子节点（还可以筛选出指定标签名）
> 
> getElementsByClass -> 通过元素的样式类名获取一组元素（兼容所有浏览器）jQuery中没有这个方法名，但是jQuery的一部分选择器也是基于这个方法的原理来实现的
> 
> 获取上一个哥哥元素节点(prev)、获取下一个弟弟元素节点(next)、获取所有的哥哥元素节点(prevAll)、获取所有的弟弟元素节点(nextAll)、获取相邻的两个元素节点(sibling)、获取所有的兄弟元素节点(siblings)
> 
> 获取第一个元素子节点(firstChild)、获取最后一个元素子节点(lastChild)、这两个方法jQuery中也没有
> 
> index获取当前元素的索引
> prepend ->和appendChild对应  增加到某一个容器的开头
> 
> insertAfter ->和insertBefore 对应 增加到容器中某一个元素后面
> addClass 增加样式类名
> removeClass 删除样式类名
> hasClass 判断是否存在某一个样式类名
>
> jQuery :css
> getCss
> setCss
> setGroupCss
>  基于内置类的原型扩展的一些方法