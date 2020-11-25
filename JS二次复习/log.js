var x = 1;

function func(x, y = function anoumouse() { x = 2; }) {
    var x = 3;
    y();
    console.log(x);
}
func(5);
console.log(x);