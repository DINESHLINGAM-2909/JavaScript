let fetchData = fetch("https://fakestoreapi.com/products")
// console.log(fetchData)

fetchData.then((ab)=>{
    // console.log(ab)

    let jsonData = ab.json()
    // console.log(jsonData)
    jsonData.then((bc)=>{
        console.log(bc)
    })
}).catch((cd)=>{
    // console.log(cd)
})
