function multiply(a, b, c) {
    return a * b * c;
}
console.log("Sử dụng cách bình thường ");
var result = multiply(1, 2, 3);
console.log(result);
function multiply_orther(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
console.log("Sử dụng cách khác: ");
var d1 = multiply_orther(1);
var d2 = d1(2);
var result1 = d2(3);
var result2 = d2(4);
var result3 = d2(5);
console.log("Result1: " + result1 + " Result2: " + result2 + " Result3: " + result3);
console.log("Sử dụng cách viết arrow function");
var multiply_arrow = function (a) { return function (b) { return function (c) { return a * b * c; }; }; };
var ar1 = multiply_arrow(1);
var ar2 = ar1(2);
var res1 = ar2(3);
var res2 = ar2(4);
var res3 = ar2(5);
console.log("Result1: " + res1 + " Result2: " + res2 + " Result3: " + res3);
