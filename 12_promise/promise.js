let p = new Promise((resolve,reject)=>{
    // resolve("I will do that")  
    reject("I will not do")
})
// console.log(p)

p.then((data)=>{
    // console.log(data)
}).catch((err)=>{
    // console.log(err)
})

let q = new Promise((resolve,reject)=>{
    resolve("I can do")
    // reject("I can't do")
})

// console.log(q)

q.then((a)=>{
    console.log(a)
}).catch((b)=>{
    console.log(b);
}).finally(
    console.log("Promise is running")
)