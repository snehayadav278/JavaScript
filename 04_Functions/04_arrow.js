const user = {
    username : "sneha" ,
    price : 999 ,

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`)
        // console.log(this);
    }
    
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "sneha"
//     console.log(this.username);  //undefined(in function)
// }

// chai();


// const chai = function(){
//     let username = "sneha"
//     console.log(this.username);
// }
// chai();


const chai = () => {
    let username = "sneha"
    console.log(this);
    console.log(this.username);
}
chai();




//arrow fucntion
const addTwo= (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(3 , 4));


//implicit return
// const addTwoNum= (num1 , num2) =>  num1 + num2
const addTwoNum= (num1 , num2) =>  (num1 + num2)

console.log(addTwoNum(3 , 4));


// const myArray = [ 2 , 5 , 3 , 7 , 8]

// muyArray.forEach(() => {})