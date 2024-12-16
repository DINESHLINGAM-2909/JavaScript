// prime number
let prime = (a) => {
    if (a <= 1)
        return false
    for (let i = 2; i < a; i++) {
        if (a % i == 0)
            return false
    }
    return true
}

if (prime(4))
    console.log("primenumber")
else
    console.log("not a prime")

let start = 1
let end = 20
for (let i = start; i <= end; i++) {
    if (prime(i))
        console.log(i)
}

let arr1 = [2,9,12,18]
let arr2 = [3,5,11,20]
let arr3 = []
let x = 0
for(let i = 0;i<arr1.length;i++)
{
    arr3[x++] = arr1[i];
}
for(let i = 0;i<arr2.length;i++)
{
    arr3[x++] = arr2[i];
}
console.log(arr3)
console.log(sort(arr3))

function sort(a){
    for(let i = 0;i<a.length;i++)
    {
        for(let j = i+1;j<a.length;j++)
        {
            if(a[i] > a[j]){
                temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    return a
}
