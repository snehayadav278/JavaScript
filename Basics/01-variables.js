const accountId = 144553
let accountEmail = "abc12@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  //not allowed

accountEmail = "xyz@gmai.com"
accountPassword = "2134526"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

//var -> Old way (ES5 se pehle)
//Function scoped (block {} ignore karta hai)
//Re-declare allowed
//Update allowed

//let -> Modern way (ES6)
//Block scoped ({} ke andar hi valid)
//Re-declare NOT allowed
//Update allowed

//const -> Constant variable (value change nahi hoti)
//Block scoped
//Re-declare NOT allowed
//Update NOT allowed

/*
prefer not to use var
because of issue in block scope and functional scope
*/