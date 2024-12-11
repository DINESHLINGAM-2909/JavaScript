//! Datatypes in javaScript
// 1.primitive datatype

//!1.Number
var a = 10
console.log(a)
console.log(typeof a) //number

let b = 13.2
console.log(b)
console.log(typeof b) //number

let c = Number(20) //number method
console.log(c)
console.log(typeof c) //number

//!2.boolean
let d = true
console.log(d)
console.log(typeof d)//boolean

let e = Boolean(false)
console.log(e)
console.log(typeof e)//boolean

//! 3.String - we can declare string in 2 ways
            //i) by using literals
            //ii) by using object

            //i) by using literals
let s1 = "here i am using double quotes"
console.log(s1)
console.log(typeof s1)

let s2 = 'here i am using single quotes'
console.log(s2)
console.log(typeof s2)

let s3 = `here i am using back ticks`
console.log(s3)
console.log(typeof s3)

            //ii) by using objects

let sob = new String("dinesh");
console.log(sob)
console.log(typeof sob)

//! 4.undedefined - we declare the variable and we not initialize it

let a1
console.log(a1) //undefined
console.log(typeof a1)

//! 5.null - the tyoe of null will be object
let a2 = null
console.log(a2)
console.log(typeof a2) //object

//BigInt - It will add the n in suffix of the number
let a3 = BigInt(43)
console.log(a3)
console.log(typeof a3) //BigInt

// ? 2.Non-primive datatypes

//! 1.Array - you can give any kind of data 

let arr = [1,'Hi',true,null,undefined]
console.log(arr)

//! 2.function - set of statements which present in same blocks

function add(){
    console.log("This is add function")
} 

add()

// ! 3.object - anything have physical existance is called objects

let student = {
    sname:"dinesh",
    sid:"101",
    phone:9198,
    skills:['html','css','js']
}
console.log(student)