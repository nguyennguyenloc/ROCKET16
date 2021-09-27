function multiply(a, b, c){
    return a * b * c;
}

console.log("Sử dụng cách bình thường ");
let result = multiply(1, 2, 3);
console.log(result);

function multiply_orther(a){
    return (b) => {
        return (c) => {
            return a * b * c;
        };
    };
}
console.log("Sử dụng cách khác: ");
let d1 = multiply_orther(1);
let d2 = d1(2);
let result1 = d2(3);
let result2 = d2(4);
let result3 = d2(5);

console.log("Result1: " + result1 + " Result2: " + result2 + " Result3: " + result3);

console.log("Sử dụng cách viết arrow function");
let multiply_arrow = (a) => (b) => (c) => a * b * c;
let ar1 = multiply_arrow(1);
let ar2 = ar1(2);
let res1 = ar2(3);
let res2 = ar2(4);
let res3 = ar2(5);
console.log("Result1: " + res1 + " Result2: " + res2 + " Result3: " + res3);