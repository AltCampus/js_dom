//Select the section with an id of container without using querySelector.
document.getElementById("container");

//Select the section with an id of container using querySelector.
document.body.querySelector("#container");

//Select all of the list items with a class of "second".
document.body.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
var select = document.body.getElementsByClassName("third");
select[1]; //or
document.querySelector("ol .third");

//Give the section with an id of container the text "Hello!".

//Add the class main to the div with a class of footer.
var c = document.querySelector(".footer");
c.classList.add("main");

//Remove the class main on the div with a class of footer.
var c = document.querySelector(".footer");
c.classList.remove("main");

//Create a new li element.
var elem = document.createElement("li");

//Give the li the text "four".
elem.textContent = "four";

//Append the li to the ul element.
list = document.querySelector("ul");
list.appendChild(elem);

//Loop over all of the list inside the ol tag and give them a background color of "green".
var ol = document.querySelectorAll("ol li");
ol.forEach(n => (n.style.backgroundColor = "green")); //for lists only
//or
var ol = document.querySelectorAll("ol");
ol.forEach(n => (n.style.backgroundColor = "green")); //for whole ol tag
//Remove the div with a class of footer.
var rem = document.querySelector(".footer");
rem.parentNode.removeChild(rem);
