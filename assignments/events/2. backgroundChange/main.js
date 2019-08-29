function changeBackground(){
	document.body.style.backgroundColor = "hotpink"
};

document.body.addEventListener("mousemove", changeBackground);

function random() {
	var col = `#${String(9597547352642325273375 * Math.random()).slice(0, 6)}`;
	document.body.style.backgroundColor = col;
}

document.body.addEventListener("mousemove", random);