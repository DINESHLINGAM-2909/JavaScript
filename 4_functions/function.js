//!how to declare function
// function function-name()){

// }
// function-name()

//! 1.named function

function display() {
    console.log('hello, i am display function')
}

display() //hello, i am display function

//! function with parameters.

function add(a, b) {
    console.log(a + b);
}
add(12, 4)//16

//! function with return type

function mul(a, b) {
    return a * b
}
console.log(mul(2, 5)) //10

//! 2.function with expression

let hello = function () {
    console.log('I am fuction with expression')
}
hello() //I am fuction with expression

let sub = function (a, b) {
    return a - b
}
console.log(sub(8, 1)) //

//! Arrow function

let hi = () => {
    console.log("i am arrow function")
}
hi() //i am arrow function

let divide = (a, b) => {
    console.log(a / b);
}
divide(10, 2) //5


//!nested function
function outer() {
    let a = 10;
    function inner() {
        let b = 20
        console.log(a + b);
    }
    inner()
}
outer()

let outer1 = () => {
    let x = 10
    let inner1 = () => {
        let y = 30
        console.log(x + y)
    }
    inner1()
}
outer1()

//! what is lexical scoping?
    //! When we are declaring nested function ,inner function can take all the property of ourter
    // !function, but outer function can't take the property of inner function. 

//! Higher order function and call back funciton
// The function who take another function as an arguement is called higer order function.
// The function which one is sending as parameterto higher order function is called call back function.

//! higher order function

function hof(a,b,c){
    console.log(a) //12
    console.log(b) //34
    c() //Hi i am call back function.
}

function cb(){ //callback function
    console.log("Hi i am call back function.")
}
 
hof(12,34,cb)
hof(10,20,()=>{
    console.log("Hi i am dinesh")
});

// ! IIFE 
(
    function(){
        console.log('i am IIFE')
    }
)
()

