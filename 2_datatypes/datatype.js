//! Datatypes in javaScript
// 1.primitive datatype

//1.Number
var a = 10
console.log(a)
console.log(typeof a) //number

let b = 13.2
console.log(b)
console.log(typeof b) //number

let c = Number(20) //number method
console.log(c)
console.log(typeof c) //number

//2.boolean
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