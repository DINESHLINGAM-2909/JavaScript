let num1 = 10
let num2 = 4.5

console.log(num1) //10
console.log(typeof num2) //number

let num3 = Number("10")
console.log(typeof num3) //number

let num4 = Number("10abc")
console.log(num4) //NaN - it is also considered a number
console.log(typeof num4) // number


// ! prompt()

// * when we are taking any value by using prompt, the type of the value will be string.

// let a = Number(prompt("Enter one number : "))
// let b = Number(prompt("Enter second number : "))
// alert(a+b)

// ! Number methods

// ! 1. parseInt() 

let num5 = Number.parseInt("10abc")
console.log(num5) //10

//parseFloat()
//isFinite()
//isInteger()
//isNaN()
