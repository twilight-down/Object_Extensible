for (var i = 0; i < 5; i++) {
    fun(i)
} //0 1 2 3 4
function fun(i) {
    setTimeout(function() {
        console.log(i);
    }, 10)
}


// --------------

for (i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 10)
    })(i)
} //0 1 2 3 4