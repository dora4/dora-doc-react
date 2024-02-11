class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '('+this.x+','+this.y+')';
    }
}
typeof Point//"function"
Point == Point.prototype.constructor//true
var point = new Point(2, 3);

class Foo {
    static classMethod() {
        return 'hello';
    }
}
Foo.classMethod()//'hello'
//Symbol自动保证不重复
const bar = Symbol('bar');
const snaf = Symbol('snaf');
export default class MyClass {
    //共有方法
    foo(baz) {
        this[bar](baz);
    }
    //私有方法
    [bar](baz) {
        return this[snaf] = baz;
    }
}
class B {

}
// 类的继承
class A extends B {
    constructor() {
        super();
    }
}
