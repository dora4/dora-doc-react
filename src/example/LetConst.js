{
    let a = 10;
    var b = 1;
}

a // ReferenceError: a is not defined.
b // 1

for (let i=0;i<10;i++) {
    // ...
}
console.log(i);
// ReferenceError: i is not defined

var a = [];
for (var i=0;i<10;i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[6]();     // 10

for (let i = 0;i<3;i++) {
    let i = 'abc';
    console.log(i);
}
// abc
// abc
// abc

console.log(foo);// 输出undefined
var foo = 2;
console.log(bar);// 报错ReferenceError
let bar = 2;

var tmp = 123;
if (true) {
    tmp = 'abc';// ReferenceError
    let tmp;
}
