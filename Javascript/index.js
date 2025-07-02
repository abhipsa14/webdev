// let firstName="abhipsa"
// const age=21
// var isStudent=true

// console.log(firstName

// let age =19
// let canvote = (age>18)
// console.log(canvote) // false

function greet(name){
    // console.log("hello " + name);
    return "hello " + name;
}
// let name1 = "Abhipsa";
// greet(name1); // hello Abhipsa
// console.log(ans); // undefined
let ans = greet("Abhipsa");
console.log(ans); // hello Abhipsa


function add(a, b) {
    let totalsum=a+b;
    return totalsum;
}
let ans1 = add(5, 6);
console.log(ans1); // 11

function canVote(age){
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let ans2 = canVote(19);
console.log(ans2); // true


for (let i = 0; i < 5; i++) {
    console.log("Hello " + i);
}

// arrays in js => arrayas/vec c++ => vectors in rust => arraylist java
// objects in js => map in c++ =>hashmap in rust=>hashmap in java

let user1={
    name:"Abhipsa",
    age:21,
    gender:"Female"
}
console.log(user1.name); // { name: 'Abhipsa', age:

let user=[1,2,3,4,5]
console.log(user[4]); // [1, 2, 3, 4, 5]
console.log(user.length); // 5