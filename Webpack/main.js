export default class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
};

export function printName(user) {
    console.log(`user name: ${user.name}`);
};

export function printage(age) {
    console.log(`age: ${age.age}`);
};  