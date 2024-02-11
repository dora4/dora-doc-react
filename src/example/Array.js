function f(x, y, z) {

}
let args = [0, 1, 2];
f(...args);

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(arr2);

const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
a1 // [2, 2]

Array.of(3, 11, 8);//[3,11,8]
Array.of(3).length;//1

[1, 4, -5, 10].find((n)=>n<0);
// -5
[1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
})
// 2
['a', 'b', 'c'].fill(7);
//[7,7,7]
new Array(3).fill(7)
//[7,7,7]

[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]

[1,2,3,4].flatMap((x)=>x*2)
//[2,4,6,8]

const arr = [5, 12, 8, 130, 44];
arr.at(2)//8
arr.at(-2)//130

const sequence = [1,2,3];
sequence.toReversed()//[3,2,1]
const order = [1,3,2];
order.toSorted()//[1,2,3]
const feed = [1,1,3];
feed.with(1, 2)//[1,2,3]
