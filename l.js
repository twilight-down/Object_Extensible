let a = 0,
    b = 0;

function A(a) {
    A = function(b) {
        console.log('=======');
        console.log(a + b++);
    };
    console.log('--------');
    console.log(a++);
}
A(1); //1
A(2); //4