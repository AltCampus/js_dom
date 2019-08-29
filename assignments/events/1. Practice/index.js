//Select the section with an id of container without using querySelector.

document.getElementById("container");


//Select the section with an id of container using querySelector.

document.querySelector("#container");


//Select all of the list items with a class of "second".

document.body.querySelectorAll(".second");



//Select a list item with a class of third, but only the list item inside of the ol tag.

document.body.children[1].lastElementChild.querySelector(".third");



//Give the section with an id of container the text "Hello!".

document.getElementById("container").textContent = "Hello";



//Add the class main to the div with a class of footer.

	var footerClass = document.querySelector(".footer");
	footerClass.className = "main";

//Remove the class main on the div with a class of footer.

document.querySelector(".main").className = "footer";


//Create a new li element.

var elementLi = document.createElement("li");


//Give the li the text "four".

elementLi.innerText = "four";



//Append the li to the ul element.

document.body.querySelector('ul').appendChild(li);



//Loop over all of the list inside the ol tag and give them a background color of "green".

document.querySelectorAll("ol").forEach((cb) => {cb.style.background = "green"});


//Remove the div with a class of footer.

document.querySelector(".footer").remove();