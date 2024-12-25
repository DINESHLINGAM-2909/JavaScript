// ! How to access any element

// * 1.Target element by the Id

let p1 = document.getElementById("p1")
console.log(p1)

let h1 = document.getElementById("h1")
console.log(h1)

// * 2.Target element by the classname

let cons = document.getElementsByClassName("container")
console.log(cons)
console.log(cons[1]) // using index value

// * 3.Target element by selector - we can give id also,class name also


let para = document.querySelector("#p1")
console.log(para)

let container = document.querySelector(".container")
console.log(container) // it will take the first element 

// ! how to know what is present inside that

let con3 = document.querySelector(".container3")
console.log(con3)

console.log(con3.innerText)
//this is container3
//Lorem ipsum dolor sit amet.

console.log(con3.innerHTML)
//<h3>this is container3</h3>
//<p>Lorem ipsum dolor sit amet.</p>

let con4 = document.querySelector(".container4")
console.log(con4)
console.log(con4.innerText)
console.log(con4.innerHTML)

con4.innerText = "hello i am dinesh"
con4.innerHTML = "<h1>this is container4</h1> <p>I am para4</p>"

let con5 = document.querySelector(".container5")

con5.innerHTML = cons[0].innerHTML
