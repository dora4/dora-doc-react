function foo({x, y=5}) {
    console.log(x, y)
}
foo({})// undefined 5
foo({x:1})// 1 5
foo({x:1,y:2})// 1 2
foo()// TypeError: Cannot read property 'x' of undefined

function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}
add(2, 5, 3)//10

var f = ()=>5;
//等价于
var f = function () {
    return 5
};
var sum = (num1, num2) => num1 + num2;
//等价于
var sum = function (num1, num2) {
    return num1 + num2;
}
// 异常处理
try {
    //...
} catch (e) {
    //处理错误
}
