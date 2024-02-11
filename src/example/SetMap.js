const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x=>s.add(x));
for (let i of s) {
    console.log(i);
}
// 2 3 5 4
let set = new Set(['red', 'green', 'blue']);
for (let item of set.keys()) {
    console.log(item);
}
// red
// green
// blue
for (let item of set.values()) {
    console.log(item);
}
// red
// green
// blue
for (let item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

const map = new Map([
    ['name', '张三'],
    ['title', 'author']
])
map.size// 2
map.has('name')// true
map.get('name')// "张三"
let map2 = new Map()
map2.set('foo', true)
map2.set('bar', false)
map2.size//2
map2.clear()
map2.size//0

//对象转map
let obj = {"a":1,"b":2};
let map3 = new Map(Object.entries(obj))

