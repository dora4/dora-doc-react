var regex = new RegExp('xyz', 'i');
// 等价于
var regex = /xyz/i;

var regex = new RegExp(/xyz/i);
// 等价于
var regex = /xyz/i;

var regex = new RegExp(/xyz/, 'i');
// Uncaught TypeError: Cannot supply flags when constructing one RegExp from another

function  codePointLength(text) {
    let result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}

var s = '𠮷𠮷';
s.length //4
codePointLength(s)//2

const r1 = /hello/;
const r2 = /hello/u;
r1.unicode  // false
r2.unicode  // true

const RE_TWICE = /^(?<word>[a-z]+)!\1$/
RE_TWICE.test('abc!abc')// true
RE_TWICE.test('abc!ab')// false

