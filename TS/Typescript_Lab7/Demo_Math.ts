function sum(a: number, b: number){
    return a + b;
}

let sumResult = sum(20, 10);
console.log("Kết quả phếp cộng: ", sumResult);

console.log("===Demo HOF===");
function caculate(a: number, b: number, operation){
    let result = operation(a, b);
    console.log("Kết quả của phép ", operation, " là: ", result);
}

caculate(20, 10, sum);