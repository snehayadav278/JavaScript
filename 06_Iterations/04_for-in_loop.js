const myObject = {
    js : "javacsript" ,
    cpp : "C++",
    rb :"ruby" ,
    swift : "swift by apple"
}

for(const key in myObject){
    console.log(key);
}

for(const key in myObject){
    console.log(myObject[key]);
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



//arrays

const programming = ["js" , "ruby" , "python" , "java" , "cpp"]
for(const key in programming){
    console.log(key);
} 

for(const key in programming){
    console.log(programming[key]);
} 


//map

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('Fr' , "France")

// for(const key in map){
//     console.log(map[key]);
// }
