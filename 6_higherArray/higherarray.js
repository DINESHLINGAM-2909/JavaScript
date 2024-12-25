// ! Higher order array methods

// ! 1) forEach()

let arr1 = [10,20,30,40,50]
arr1.forEach((ele,indx,arr1)=>{
    console.log(ele,indx,arr1);
})

let arr2 = []
arr1.forEach((a)=>{
    if(a > 20){
        arr2.push(a)
    }
})

console.log(arr2) //(3) [30, 40, 50]

// * add 100 with all the elements and give the array

let arr3=[10,20,30,40]
let ans=[]
arr3.forEach((a)=>{
    ans.push(a+100)
})
console.log(ans) 
//(4) [110, 120, 130, 140]

let arr4 = [10,20,30,40,50]
let add = 0
arr4.forEach((a)=>{
    add = add+a
})
console.log(add) //150

// forEach method cannot return anything
// undefined variable declared not initialized

//! 2) filter method()
// It will also take 3 parameters(element,index,array)
// it will return array
// what we write in if() condition we can write in filter method

let arr5 = [10,20,30,40,50]
let filterArray = arr5.filter((ele)=>{
    return ele>30
})
console.log(filterArray) //(2) [40, 50]

// another way of writting filter statement in one line
// no need of {} and return keyword here

let filterArray2 = arr5.filter((ele)=> ele > 30)
console.log(filterArray2) //(2) [40, 50]

// ! 3)map() method
// it will work on arithmetic operation
// it will return array
// it can also take 3 parameters

let arr6 = [10,20,30,40,50]
arr6.map((ele)=>{
    return ele+100
})
console.log(arr6)

// another way of writing filter statement in one line
// no need of {} and return keyword here
let maparr = arr6.map((a)=> a+100)
console.log(maparr)

//! 4) reduce
// it will also take 4 parameters(accumulator,element,index,array)
// it will give added elements in array
// let reducearr = arr1.reduce((acc,ele)=>{
//     return acc+ele
// },here we give accumulator value)

arr7 = [10,20,30,40,50]
let reducearr = arr7.reduce((acc,ele)=>{
    return acc + ele
},1)
console.log("reduce arr "+reducearr)

// ! 5)sort()

let unsort = [8,4,5,6,1]
let asc = unsort.sort((a,b)=>a-b)
console.log(asc)

let desc = unsort.sort((a,b)=>b-a)
console.log(desc)