const heading = document.getElementById("main-heading");


// text change
heading.textContent = "DOM Manipulation";


// HTML change
heading.innerHTML = "<span style='color:blue'>Updated DOM</span>";


// style change
heading.style.backgroundColor = "yellow";


// class add/remove
heading.classList.add("highlight");
heading.classList.remove("highlight");


// create element
const newDiv = document.createElement("div");
newDiv.textContent = "New Element Added";


// append
document.body.appendChild(newDiv);


// remove element
const list = document.getElementById("list");
list.remove();