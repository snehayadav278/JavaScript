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