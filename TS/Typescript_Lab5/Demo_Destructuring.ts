let account = {
    name: "loc",
    age: 20,
    gender: "Nam", 
    address: "Vinh"
};

let { name: name_left, age: age_left, gender: gender_left, address: address_left} = account;

// let { name: name_left} = account 
// => let name_left = account.name

console.log(name_left + age_left + gender_left + address_left);

let worker = {
    ...account,
    task: 4
}
console.log("Worker " + worker.name + worker.task);