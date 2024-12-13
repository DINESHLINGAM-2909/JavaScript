//!how to declare function
// function function-name()){

// }
// function-name()

//! 1.named function

function display()
{
    console.log('hello, i am display function')
}

display() //hello, i am display function

//! function with parameters.

function add(a,b){
    console.log(a+b);
}
add(12,4)//16

//! function with return type

function mul(a,b){
    return a*b
}
console.log(mul(2,5)) //10

//! 2.function with expression

let hello = function(){
    console.log('I am fuction with expression')
}
hello() //I am fuction with expression

let sub = function(a,b){
    return a-b
}
console.log(sub(8,1)) //

//! Arrow function

let hi = ()=>{
    console.log("i am arrow function")
}
hi() //i am arrow function

let divide = (a,b) => {
    console.log(a/b);
}
divide(10,2) //5

// prime number
let prime = (a)=>
{
    if(a <= 1)
        return false
    for(let i = 2;i<a;i++){
        if(a%i == 0)
            return false
    }
    return true
}

if(prime(4))
    console.log("primenumber")
else
    console.log("not a prime")

let start = 1
let end = 20
for(let i = start;i<=end;i++){
    if(prime(i))
        console.log(i)
}