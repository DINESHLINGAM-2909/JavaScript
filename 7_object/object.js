//! how to declare object

let ob = {
    name : "Pen",
    price : 20,
    color : ['black','blue','red'],
    do:()=>{
        console.log('i can write')
    }
}
// ! how to access objects using . operator
console.log(ob.name) //Pen
console.log(ob.price) //20
console.log(ob.color) //(3) [black,blue,red]
ob.do() // i can write

// ! how to access objects using [] 
console.log(ob["name"]) //pen
console.log(ob["price"]) // 20
console.log(ob["color"]) //(3) [black,blue,red]

//! how to print the object
console.log(ob)
//{name: 'Pen', price: 20, color: Array(3), do: ƒ}

// ! how to modify
console.log(ob.price) //20
ob.price = 30
console.log(ob.price) //30

// ! how to add new property in object

ob.brand = "camlin"
console.log(ob)
//{name: 'Pen', price: 30, color: Array(3), brand: 'camlin', do: ƒ}

// ! how to delete 

delete ob.brand
console.log(ob)

// ! how to add array elemenet inside object

ob.color.push("pink")
console.log(ob.color) // ['black', 'blue', 'red', 'pink']


// ! object methods

let student = {
    sname : "dinesh",
    age:20,
    skills:['java','SQL','WebTech'],
    address:{
        city : "chennai",
        pin : 39498
    }
}

console.log(student.address.city) //chennai

// ! 1. Object.keys(object ref)
  // * it will give all the keys in the form off arrays

let keys = Object.keys(student)
console.log(keys) //['sname', 'age', 'skills', 'address']
console.log(Object.keys(ob)) //['name', 'price', 'color', 'do']

// ! 2.Object.values(object ref)
  // * It will return an array where all the values will be stored as array elements
let value = Object.values(ob)
console.log(value) // 'Pen', 30, Array(4), ƒ]

// ! 3.Object.entries(object ref)
  // * it will return one array there all the key and value pairs will be stored in each array.
let keyvalue = Object.entries(student)
console.log(keyvalue) // [Array(2), Array(2), Array(2), Array(2)]

// ! 4.Object.freeze()
    // * This method will freeze the object means we can't modify,delete and add the properties

Object.freeze(student)

student.phno = 49249382

delete student.age

student.age = 12

console.log(student) //{sname: 'dinesh', age: 20, skills: Array(3), address: {…}}

//! 5.Object.isFrozen()
  //* it is used to check whether the object is frozen or not. if it is frozen it will give true otherwise it will gives false

console.log(Object.isFrozen(student)) // true


let student1 = {
    sname : "dinesh",
    age:22,
    skills:['HTML','CSS','JS'],
    address:{
        city : "vadapalani",
        pin : 242394
    }
}

// ! 6.Object.seal() 
    // It is also similiar to object.freeze() method but here we can modify the property of the object. we can't delete or add any elements

console.log(student1) //{sname: 'dinesh', age: 22, skills: Array(3), address: {…}}

Object.seal(student1)

delete student1.age

student1.place = 'coimbatore'

console.log(student1) // {sname: 'dinesh', age: 22, skills: Array(3), address: {…}}

student1.age = 23

console.log(student1) // {sname: 'dinesh', age: 23, skills: Array(3), address: {…}}

//! 7.Object.isSealed()

    // * it is used to know whether the object is sealed or not

console.log(Object.isSealed(student1)) //true

// ! 8.Object.assign()

let obj1 = {
    name:"ob1",
    age:10 
}

let obj2 = {
    name:"ob2",
    age:20
}

let combinedOb = Object.assign({},obj1,obj2)
console.log(combinedOb) //{name: 'ob2', age: 20}
console.log(obj1) //{name: 'ob1', age: 10}

// ! 9.hasOwnProperty()
    // * it is used to check any property is present or not inside the object
console.log(obj2.hasOwnProperty("pincode"))  // false
console.log(obj2.hasOwnProperty("age")) // true