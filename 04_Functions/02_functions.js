function  calculateCartPrice(...num1){    //rest operator
    return num1
}

console.log(calculateCartPrice(200,300,400));

function  calculateCartPrice2(val1 , val2 , ...num1){    //rest operator
    return num1
}

console.log(calculateCartPrice2(200,300,400,500));


const user = {
    username : "sneha" ,
    price : "199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);

handleObject({
    username : "sam" ,
    price : "199"
})



const myArray = [ 200 , 300, 400 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));
console.log(returnSecondValue([ 200 , 300, 400 , 600]));