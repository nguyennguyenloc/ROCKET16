var numArray = [10, 20, 30];
var total = 0;
numArray.forEach(function (element) {
    total = total + element;
});
console.log("In theo cách 1: tổng các số trong mảng numArray", total);
// -----
function callback(accumulator, currentValue, currentIndex) {
    console.log("----Lần lặp ", currentIndex + 1, "----");
    console.log("accumulator hiện tại: ", accumulator);
    console.log("currentValue hiện tại: ", currentValue);
    console.log("currentIndex hiện tại: ", currentIndex);
    accumulator = accumulator + currentValue;
    return accumulator;
}
console.log("Cách 2: sử dụng reduce");
var total_reduce = numArray.reduce(callback, 0);
console.log("===Cách 2: Tổng các số sử dụng Reduce: ", total_reduce);
console.log("Cách 3: sử dụng reduce viết gọn");
var total_reduce_other = numArray.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log("===Cách 3: ", total_reduce_other);
