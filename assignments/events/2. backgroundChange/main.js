function chBackcolor() {
  document.body.style.background = `#${Math.floor(Math.random() * 100000)}`;
}
document.addEventListener("click", chBackcolor);

//function chBackcolor() {
//    document.body.style.background = "blue";
//  }
//  document.addEventListener("click", chBackcolor);
