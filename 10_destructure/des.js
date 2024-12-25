let ob = {
    name:"abc",
    age:20,
    skill:["java","html","css"],
}

console.log(ob)
console.log(ob.name)
console.log(ob.age)
console.log(ob.skill)




//! object destructure


let {name,age,skill} = ob
console.log("name is"+name); //abc
console.log("age is "+age) //20



// ! array datastructure

let arr = [10,20,30]
let[a,b,c]= arr
console.log(a)
console.log(b)
console.log(c)


//! Rest Parameter

// * The rest Parameter is used to group the remaining elements into an array.
// * It collects "the rest" of the arguement that were not explicitly specified.
// * The rest parameter is represented by three dots(...)

let arr1 = [10,20,33,44,55,66,77]
let [m,n,...o] = arr1
console.log(m)
console.log(n)
console.log(o) //(5) [33, 44, 55, 66, 77]

// ! spread parameter
// * The spread operator in javascript allows to expand an array,object,or iterable into individual elements.
// * It is often used to copy,merger,or pass element
// * The spread operator is represented by three dots(...)

let arr2 = [9,88]
let combinedArr = [...arr1,...arr2]
console.log(combinedArr) //(9) [10, 20, 33, 44, 55, 66, 77, 9, 88]
    
    // combining two objects using spread parameter
let ob1 = {
    sname:"hi",
    id:1
}
let ob2 = {
    loc:"chennai",
    gender:"male"
}
let ob3 = {...ob1,...ob2}
console.log(ob3)

// ! rest parameter example using function

function person(firstname, ...details){
    console.log(firstname) // dinesh
    console.log(details) // (3) ['chennai', 93090, 10]
}
person("dinesh","chennai",93090,10)

let arr3  = [10,20,30,40,50]
let copy = [arr3] // shallow copy
copy.push(200)
console.log(copy)  //[10,20,30,40,50,200]
console.log(arr3)  // [10,20,30,40,50,200]

// let arr = [10,20,30,40,50]
// let copy = [...arr] // deep copy
// copy.push(20)
// console.log(copy) // 6) [10, 20, 30, 40, 50, 20]
// console.log(arr) // [10, 20, 30, 40, 50]