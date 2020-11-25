// // 方案一
// var a = {
//     i: 0,
//     toString() {
//         console.log(1);
//         return ++this.i
//     }
// }

// // 方案二
// var a = [1, 2, 3];
// // shift 不能加小括号
// a.toString = a.shift

// 方案三
var i = 0
Object.defineProperty(global, 'a', { //浏览器环境用（非严格模式） window
    get() {
        return ++i
    },
    set() {
        console.log('暂时没有用到set的方法');
    }
});

if (a == 1 && a == 2 & a == 3) {
    console.log('ok');
} else {
    console.log('no');
}