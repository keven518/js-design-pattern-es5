// 适配器模式

// obj对象转换为数组
function objToArray(obj) {
    var arr = []; //新数组
    for(var i  in obj){
        arr.push(obj[i]);
    }
    return arr;
}
// 创建一个对象
var obj = {
    name: '小钱',
    age: 18,
    sex: '男'
}
// 假设我这边需要的结果是一个数组格式的输出
console.log(objToArray(obj));//['小钱',18,'男']