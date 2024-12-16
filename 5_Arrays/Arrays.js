//! Arrays 
    // * It is a collection of elements
    // * Stored in square brackets []
    // * All the values are seperated by comma.

let arr = [1,'a',true,[1,2,3]];
console.log(arr)

// ! how to know the length of the array.
 console.log(arr.length) //4

 // ! Methods in Array

 // ! 1. push()
    // > This method is used to add the elements in the end of the array.
    // > it will return the modify length of the array.

let a = [1,2,3,4,5]
console.log(a) //(5) [1, 2, 3, 4, 5]
a.push(6);
console.log(a) //(6) [1, 2, 3, 4, 5, 6]
console.log(a.push(8)) // return type is modified length of the array - 7
console.log(a) //(7) [1, 2, 3, 4, 5, 6, 8]

//! 2.pop()
    // > pop is used to remove the element from the end.
    // > it will return the removed element

let c = [1,4,8]
console.log(c) //(3) [1, 4, 8]
c.pop()
console.log(c) // (2) [1, 4]
console.log(c.pop()) // return type removed element - 4
console.log(c) //[1]

// ! 3.unshift()
    // > This method is used to add the element from the starting of the array
    // > It will return the modified length of the array.
 
let d = [1,2,5,6]
console.log(d) //(4) [1, 2, 5, 6]
d.unshift(5);
console.log(d) //(5) [5, 1, 2, 5, 6]
console.log(d.unshift(8)) // return type modified length of the array - 6 
console.log(d) //(6) [8, 5, 1, 2, 5, 6]

// ! 4.shift()
    // > This method is used to remove the element in the starting of the array.
    // > It will return the removed element.
 
let e = [3,4,5,6]
console.log(e) //(4) [3, 4, 5, 6]
e.shift()
console.log(e) // (3) [4, 5, 6]
console.log(e.shift()) // return type is removed element in the array - 4
console.log(e)  //(2) [5, 6]

// ! 5.includes()
    // > This method is used to check whether the particular element is present inside 
    // the array or not. return type is boolean
let f = [12,34,5,6]
console.log(f.includes(1)) // false
console.log(f.includes(34)) // true

// ! 6.indexOf()
    // > This method is used to give the index position of particular element.
    // > If the element is not present it gives output as -1.
let g = [1,5,7,8]
console.log(g.indexOf(5)) //1
console.log(g.indexOf(78)) //-1

// ! 7.concat()
    // > This method is used to combine two or more than two arrays and return it the new array.

let h = [1,2,4,6]
let i = [3,5,6,7]
console.log(h.concat(i)) // (8) [1, 2, 4, 6, 3, 5, 6, 7]

// ! 8.reverse()
    // > This method is used to reverse the given array
    // > It will modify the original array.
let j = ["hello","hi","bye"]
console.log(j.reverse()) // (3) ['bye', 'hi', 'hello']
console.log(j.reverse()) // (3) ['hello', 'hi', 'bye']

// ! 9.join()
    // > This method is used to convert the array into string.
let k = ['d','i','n','e','s','h']
console.log(k) // d,i,n,e,s,h
console.log(k.join()) // no output
console.log(k.join("")) // dinesh
console.log(k.join("@")) // d@i@n@e@s@h


// ! how to reverse the string using in build methods

let s = "dinesh"
let str = s.split("")
let rev = str.reverse()
let reverse = rev.join("");
console.log(s) // dinesh
console.log(reverse) // hsenid

    //!or
console.log(s.split("").reverse().join("")) // hsenid
