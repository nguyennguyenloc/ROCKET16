function sum(a, b) {
    return a + b;
}
var sumResult = sum(20, 10);
console.log("Kết quả phếp cộng: ", sumResult);
console.log("===Demo HOF===");
function caculate(a, b, operation) {
    var result = operation(a, b);
    console.log("Kết quả của phép ", operation, " là: ", result);
}
caculate(20, 10, sum);
