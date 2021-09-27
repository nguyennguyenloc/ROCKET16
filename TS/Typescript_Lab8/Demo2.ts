import { Staff } from "./Staff";
// Sử dụng reduce tính tuổi trung bình của các nhân viên.
// Tạo ra các đối tượng
let staff1 = new Staff("staff1", 20, "Male", "HN");
let staff2 = new Staff("staff2", 22, "FeMale", "NĐ");
let staff3 = new Staff("staff3", 24, "Male", "HN");
// Tạo mảng để lưu các đối tượng.
let staffArray : Staff[];
staffArray = [staff1, staff2, staff3];
// Sử dụng reduce để tính tổng tuổi của các phần tử trong mảng.
let totalAge = staffArray.reduce(
    (total_Age, itemCurrent) => total_Age + itemCurrent.getage(), 0
);
console.log("Tuổi trung bình của nhân viên là: ", totalAge / staffArray.length);