const myNums = [ 1, 2, 3]

const myTotal = myNums.reduce(function(acc , currVal){
    console.log(`acc : ${acc} and currVal : ${currVal}`);
    return acc + currVal
} , 0)

console.log(myTotal)

const myTotal2 = myNums.reduce((acc , curr) => acc + curr , 0)
console.log(myTotal2);


const shoppingCart = [
    {
        itemName : "js course" ,
        price : 2999
    },
    {
        itemName : "mobile dev course" ,
        price : 5999
    },
    {
        itemName : "python course" ,
        price : 1999
    }
]

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price , 0)
console.log(priceToPay);