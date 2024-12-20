// ! 1.setTimeout function
    // * It is used to execute the function after the specific time
    // ? syntax : setTimeout(callbackFunction, time)

let hello = ()=>{
    console.log("hello")
}
// setTimeout(hello,5000)

// setTimeout(()=>{
//     console.log("I am settimeout")
// }, 3000)

// ! 2.setInterval

// let sorry = ()=>{
//     console.log("I am very sorry")
// }

// setInterval(sorry,1000)

// setInterval(() => {
//     console.log("i am sorry 🙄")
// },2000); // (windows + . ) for emoji

// ! 3.clearInterval

// let interval = setInterval(() => {
//     console.log("i am set interval")
// }, 1000)

// clearInterval(interval)

// setTimeout(() => {
//     clearInterval(interval)   
// }, 5000);

// ! 4.clearTimeout

let timeout = setTimeout(()=>{
    console.log("i am settimeout")
},2000)


setInterval(() => {
    clearTimeout(timeout) 
}, 15000);

let ori = "abcd"
let dup = "abdc"
