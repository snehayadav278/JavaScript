const userEmail = "xyz@google.com"  

if(userEmail){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}


const userEmail2 = ""    //empty string

if(userEmail2){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}


const userEmail3 = []  //empty array

if(userEmail3){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}



// falsy values 
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// some truthy values
// "0" , 'false' , " " , [] , {} , function(){}

if(userEmail3.length === 0){
    console.log("array is empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}


// false == 0 (true)
// false == '' (true)
// 0 == '' (true)



//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");