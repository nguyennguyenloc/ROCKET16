import { Product } from "./Product";
// Tạo ra các đối tượng
let product1 = new Product("Product1", 200);
let product2 = new Product("Product2", 250);
let product3 = new Product("Product3", 400);
// Tạo mảng để lưu các đối tượng.
let productArray : Product[];
productArray = [ product1, product2, product3];
// Viết hàm currying để tính discount giá sản phẩm
const discount = (discount) => (prince) => prince - prince * discount;
// Tạo hàm để giảm giá 10% sản phẩm
const tenPercentDisscount = discount(0.1);
// In ra thông tin sản phẩm sau khi giảm giá 10%
console.log("===Thông tin sản phẩm giảm giá 10%===");
productArray.forEach((element) => {
    console.log("Name ", element.getname(), " Prince: ", tenPercentDisscount(element.getprice()));
})