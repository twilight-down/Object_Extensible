for (var i = 0; i < 5; i++) {
    fun(i)
} //0 1 2 3 4
function fun(i) {
    setTimeout(function() {
        console.log(i);
    }, 10)
}


// --------------

for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() { //不能传参 让其构成闭包
            console.log(i);
        }, 10)
    })(i)
} //0 1 2 3 4

for (let k = 0; k < 5; k++) {
    setTimeout(function() {
        console.log(k);
    }, 10)
}