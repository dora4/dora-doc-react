// let a = 1;
// let b = 2;
// let c = 3;

let [a, b, c] = [1, 2, 3];

let [x , , y] = [1, 2, 3];
x   // 1
y   // 3

let [foo = true] = [];
foo // true
let [d, e = 'b'] = ['a'];   // d='a', e='b'
let [f, g = 'b'] = ['a', undefined];    // f='a', g='b', undefined并不会覆盖原有默认值

