//target
const change = document.querySelector("body");



//callback function
function Onclick(){
    let counter = document.body; //select the tag to be changed
     counter.style.backgroundColor =  randomColorGenerator(); //"blue"
    //document.body.style.backgroundColor = "green";
}

function randomColorGenerator(){
    let colors ="#";
    let colorPicker = "1234567890abcdef".split("");
    for(let i = 0 ; i < 6; i++){
        let index = (Math.floor(Math.random()*15));
        colors = colors + colorPicker[index] ;
        
    }
    return colors;
}



//add event to target
change.addEventListener('click',Onclick);