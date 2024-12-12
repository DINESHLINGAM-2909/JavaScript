
// ! How to declare string?

let str1 = "hello"
let str2 = `HELLO`
let str3 = 'hello'

// ! how to know the length of the string

let length = str1.length // length is the property
console.log(length)

// ! String methods

// ? 1.toUpperCase() 
//it is used to convert the string into uppercase and it will return one new string


let upper = str1.toUpperCase()
console.log(upper) //HELLO
console.log(str1)  //hello (it will not change the original string)


// ?  2.toLowerCase() 
 //it is used to convert the string into lower case and it will return one new string

let lower = str2.toLowerCase();
console.log(str2) //HELLo
console.log(lower) //hello (it will not change the original string)

// ?  3.indexOf() 
// it is used to give the index of particular character

// it will take the first occurance of the character

let str4 = "hello how are you"
console.log(str4.indexOf('o'))

// ? 4.charAt(index) 
// it will give the character based on its index value

console.log(str4.charAt(4)) // o

// ? 5.concat()
// it is used to combine two or more than 2 strings and it will return one string.

let str5 = 'hello'
let str6 = 'how are you'

let combined = str5.concat(" ",str6," dinesh")
console.log(combined) //hello how are you dinesh

// ? 6.trim()
// trim() is used for remove the spaces by both sides in the string and it will return new string.
let str7 = "   dinesh     "
console.log(str7) //   dinesh   
console.log(str7.length) //14

let str8 = str7.trim()
console.log(str8) //dinesh
console.log(str8.length) //6

// ? 7.includes(substring of original string)
// it is used to check whether the particular character or words present in the string or not.
// if it is present it will return true, else return false. str7 = "dinesh "

console.log(str7.includes('n')) //true
console.log(str7.includes('o')) //false

// ? 8.statsWith(string)
// it is used to check the string is start with the particular character

console.log(str8.startsWith('d'))  //true

// ? 9.endsWith(string)
// it is used to check the string is end with the particular character

console.log(str8.endsWith('s')) //false

// ? 10.split(string)
 // it is use to convert any string into array.

let str9 = "I am dinesh"

let arr = str9.split(" ")
console.log(arr) //(3) ['I', 'am', 'dinesh']

// ? 11.slice(start index,end index)
 // it is used to extract the charater or string from another string
 // it will take two parameters start index and end index.
 // it will not includes the end index value. 
 // if you not give the end index it from start index it will give all the remaining string.
let str10 = 'hi, this is dinesh'
let str11 = str10.slice(4,18); 
console.log(str11) // this is dinesh
console.log(str11.slice(2)) //is is dinesh
// we can give negative value as an index it will take from the last.
console.log(str11.slice(-3,-1))  //es
console.log(str11.slice(-3)) //esh
console.log(str11.slice(4,0)) //output will be empty we can't give start index greater than end index
 
// ? 12.subString(start index,end index)
 // it is used to extract the charater or string from another string
 // it will take two parameters start index and end index.
 // if you give negative value it will convert it is a zero.
 // if you give start index > end index it will swap it
 // substring(7,1) -> substring(1,7)


 console.log(str11.substring(-4,6)) //this i

 console.log(str11.substring(7,1)) //his i

//! Palindrome program
let s = "madame"
let temp = ""
for(let i = s.length-1;i>=0;i--)
    temp += s.charAt(i)
if(s==temp)
    console.log("palindrome")
else
    console.log("Not a palindrome")

let s1= 'madam'
let dup = ''
for(let i = 0;i<s1.length;i++)
    if(!dup.includes(s1.charAt(i)))
        dup+=s1.charAt(i);
console.log(dup)

//1010 - 10 8+0+2+0 = 10
