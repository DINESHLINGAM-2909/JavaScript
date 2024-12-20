let ob = {
    name:"abc",
    age:20,
    skill:["java","html","js"],
    address:{
        city:"chennai",
        pin:60026
    }
}

console.log(ob);

// ! json


// JSON (Javascript object Notation) is a lightweight data-interchange format that is easy for human to red and write , and easy for machines to parse and generate




// ! Advantagtes of jSON


// ? Human Readable 

// Json structure  is easy for developers to understand and write 

// ? Lightweight

// json is a minimal format that reduces the size of the data being transmitted 


// ? Language independent

// Json can be used with many programming Language,includes Javascript,python,java etc


// ! 1.JSON.stringify()
// * it will convert any javascript object to json

let jsonData = JSON.stringify(ob)
console.log(jsonData)

//! 2.JSON.parse()

let ob2 = JSON.parse(jsonData)
console.log(ob2)