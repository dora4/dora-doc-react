0b111110111 === 503// true
0o767 === 503// true

let budget = 1_000_000_000_000
budget === 10 ** 12

let num = 12_345;
num // 12345
num.toString()// 12345

Number('123_456')//NaN
parseInt('123_456')//123

Number.parseInt('12.34')// 12
Number.parseFloat('123.45#')// 123.45

Number.isInteger(25)// true
Number.isInteger(25.1)// false
Number.isInteger(25.0)// true

//去掉小数部分
Math.trunc(4.1) // 4

//判断一个数是正数、负数还是0
Math.sign(-5)// -1
Math.sign(5)// +1
Math.sign(0)// 0
Math.sign(-0)//-0
Math.sign(NaN)//NaN
// 如果不是数值，会自动转为数值
Math.sign('')// 0
Math.sign(true)// +1
Math.sign(false)// 0
Math.sign(null)// 0
Math.sign('9') // +1
Math.sign('foo') // NaN
Math.sign() // NaN
Math.sign(undefined) // NaN

BigInt(123) //123n
BigInt('123')//123n
BigInt(false)//0n
BigInt(true)//1n
