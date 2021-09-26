var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var account = {
    name: "loc",
    age: 20,
    gender: "Nam",
    address: "Vinh"
};
var name_left = account.name, age_left = account.age, gender_left = account.gender, address_left = account.address;
// let { name: name_left} = account 
// => let name_left = account.name
console.log(name_left + age_left + gender_left + address_left);
var worker = __assign(__assign({}, account), { task: 4 });
console.log("Worker " + worker.name + worker.task);
