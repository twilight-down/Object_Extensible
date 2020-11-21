// console.log(compose()(5)); //[5]
// console.log(compose(fn1)(5)); //15
// console.log(compose(fn1, fn2)(5)); //150
// console.log(compose(fn1, fn2, fn1, fn3)(5)); //16

let fn1 = function(x) {
    return x + 10;
};
let fn2 = function(x) {
    return x * 10;
};
let fn3 = function(x) {
    return x / 10;
}

function compose(...funcs) {
    return function proxy(...args) {
        let len = funcs.length
        if (len === 0) {
            return args
        }
        if (len === 1) {
            return funcs[0](...args)
        }
        return funcs.reduce((x, y) => {
            if (typeof x === 'function') {
                return y(x(...args))
            } else {
                return y(x);
            }

        })
    }
}
console.log(compose()(5)); //[5]
console.log(compose(fn1)(5)); //15
console.log(compose(fn1, fn2)(5)); //150
console.log(compose(fn1, fn2, fn1, fn3)(5)); //16