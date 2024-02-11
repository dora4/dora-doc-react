"\u0061"
// "a"

"\uD842\uDFB7"
// "告"

'\z' === 'z'// true
'\172' === 'z'// true
'\x7A' === 'z'// true
'\u007A' === 'z'// true
'\u{7A}' === 'z'// true

// 字符串的遍历器for...of
for (let codePoint of 'foo') {
    console.log(codePoint)
}
// "f"
// "o"
// "o"

JSON.stringify('\u{D834}')// "\u{D834}"

// 模板字符串
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time} today`

String.fromCharCode(0x20BB7)
// "ஷ"
String.fromCodePoint(0x20BB7)
// "告"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80Y'
// true

let s = 'Hello World!';
s.startsWith('Hello');// true
s.endsWith('!');// true
s.includes('o');// true

'x'.repeat(3)// "xxx"

'x'.padStart(5, 'ab')// 'ababx'
'x'.padEnd(4, 'ab')// 'xaba'

const s2 = '   abc   ';
s2.trim();// "abc"
s2.trimStart();// "abc   "
s2.trimEnd();// "   abc"

'aabbcc'.replace('b', "_")// 'aa_bcc'
// 如果要替换所有的匹配，不得不使用正则表达式的g修饰符。
'aabbcc'.replaceAll(/b/g, '_')

const str = 'hello';
str.at(1)// "e"
str.at(-1)// "o"
