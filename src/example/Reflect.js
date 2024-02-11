// if (Reflect.defineProperty(target, property, attributes)) {
//     //true
// } else {
//     //false
// }
Reflect.has(Object, 'assign')//true
var myObject = {
    foo:1,
    bar:2,
    get baz() {
        return this.foo + this.bar;
    }
}
Reflect.get(myObject, 'foo')//1
Reflect.get(myObject, 'bar')//2
Reflect.get(myObject, 'baz')//3
var myObject = {
    foo:1,
    set bar(value) {
        return this.foo = value;
    }
}
myObject.foo//1
Reflect.set(myObject, 'foo', 2)
myObject.foo//2

