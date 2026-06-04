// let a = 10
// const b = 20
// var c = 30


//var c = 300  

let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner : " , a)
    
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a);


function one(){
    const username = "sneha" 

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "sneha" 
    if(username === "sneha") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);

}

// console.log(username);



// ++++++++++++++++++++++++++++interesting +++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num + 1
}

// addOne(5);


addTwo(4);
const addTwo = function(num){
    return num + 2
}

addTwo(4);