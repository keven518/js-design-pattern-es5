// 外观模式实现
function addEvent(dom, type, fn){
    // 对于支持dom2级事件处理程序 addEventListener 方法的浏览器
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
    }else if(dom.attachEvent){// 对于不支持addEventListener 方法但支持attachEvent 方法的浏览器
        dom.attachEvent('on'+type,fn);
    }else {
        dom['on'+ type] = fn;
    }
}

addEvent(document.getElementById('btn'),'click',function(){
    console.log('我是点击事件');
});