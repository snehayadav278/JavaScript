
function sayMyName () {
    console.log("S");
    console.log("N");
    console.log("E");
    console.log("H");
    console.log("A");
}

// sayMyName();

// function addTwoNumbers(num1 , num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1 , num2){

    // let result = num1 + num2;
    // return result ;

    return num1 + num2 ; 
}


const result = addTwoNumbers(3 , 4);
// console.log("Result : " , result);

function loginUserMessage(username = "Sam"){
    // if(username === undefined)
    if(!username){
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage("sneha"));
console.log(loginUserMessage());




