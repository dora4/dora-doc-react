function f(x, y) {
    return {x:x,y:y};
}
f(1, 2)// Object {x: 1, y: 2}
Object.is('foo', 'foo')//true
Object.is({},{})//false
// try {
//     Object.defineProperty(target, property, attributes)
// } catch (e) {
//
// }
