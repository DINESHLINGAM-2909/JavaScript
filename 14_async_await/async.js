let hello = async()=>{
    try{

        let getData = await fetch("https://fakestoreapi.com/products")
        // console.log(getData)
        let jsonData = await getData.json()
        // console.log(jsonData)
        jsonData.map((ele)=>{
            console.log(ele.title,ele.price)
        })
    }
    catch(err)
    {
        console.log(err)
    }
}
hello()


