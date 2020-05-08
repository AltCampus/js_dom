//Select the section with an id of container without using querySelector.
let sec = document.getElementById("container");

//Select the section with an id of container using querySelector.

let sec = document.querySelector("#container");
//Select all of the list items with a class of "second".

let liClass = document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
let liInol = document.querySelector("ol> li:last-child");


//Give the section with an id of container the text "Hello!".

let sect = document.querySelector('#container');
sect = "Hello!"

//Add the class main to the div with a class of footer.

let footer = document.querySelector(".footer");
footer.classList.add("main");

//Remove the class main on the div with a class of footer.
 footer.classList.remove("main");

//Create a new li element.
let newLi = document.createElement("li");


//Give the li the text "four".


newLi = four;
//Append the li to the ul element.

ul.append(li);

//Loop over all of the list inside the ol tag and give them a background color of "green".

let olList = document.querySelectorAll("ol>li");
olList.forEach(elem => elem.styl.background = "green");

//Remove the div with a class of footer.

div.classList.remove("footer");