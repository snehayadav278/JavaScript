const parent = document.querySelector(".container");

// children
console.log(parent.children);

// first & last child
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

// parent
const child = document.querySelector(".text");
console.log(child.parentElement);

// siblings
console.log(child.nextElementSibling);
console.log(child.previousElementSibling);