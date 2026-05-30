const name = "sneha"
const repoCount = 50

// console.log(name + repoCount +  " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sneha-ydv') //another name to declare strings
console.log(gameName);
console.log(typeof gameName)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('y'));


const newString = gameName.substring(0 , 4);
console.log(newString);

const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);

const newString1 = "    hitesh     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'))
console.log(url.includes('sneh'))

console.log(gameName.split('-'));