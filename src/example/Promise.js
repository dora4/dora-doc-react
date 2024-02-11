// const promise = new Promise(function (resolve, reject) {
//     if (/* 异步操作成功 */) {
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });
// promise.then(function (value) {
//
// }, function (error) {
//
// })
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    })
}
timeout(100)
    .then((value)=>{
    console.log(value);
}).catch(error=>{})
    .finally(()=>{})
const p = Promise.all([p1, p2, p3]);
const p2 = Promise.race([p1, p2, p3])
