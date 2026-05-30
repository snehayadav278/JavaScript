//Dates

let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let myCreateDate = new Date(2023, 0 , 23);
console.log(myCreateDate.toString());

let myCreateDate2 = new Date(2023, 0 , 23 , 5 , 3);
console.log(myCreateDate2.toString());

let myCreateDate3 = new Date("2026-01-14");
console.log(myCreateDate3.toString());

let myCreateDate4 = new Date("01-14-2024");
console.log(myCreateDate4.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleDateString('default' , {
    weekday : "long"
})




