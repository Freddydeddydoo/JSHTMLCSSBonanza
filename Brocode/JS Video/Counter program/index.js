
const counter = document.getElementById("number_displayed");
const decreasebtn = document.getElementById("decreases");
const increasebtn = document.getElementById("increases");
const resetbtn = document.getElementById("reset");
const changeCountClr = document.getElementById("number_displayed");

// TODO - Add feature where saturation of colour gets worse the larger the absolute value of the count is
let colors = [];

let count = 0;
counter.textContent = count;


increasebtn.onclick = function () {
  count++;
  counter.textContent = count;
  if (count > 0){
    changeCountClr.style.color = "green";
  }
  if (count === 0){
        changeCountClr.style.color = "black";
    }
}

decreasebtn.onclick = function () {
  count--;
  counter.textContent = count;
    if (count < 0){
    changeCountClr.style.color = "red";
  }
  if (count === 0){
        changeCountClr.style.color = "black";
    }
}

resetbtn.onclick = function () {
  count = 0;
  counter.textContent = count;
  changeCountClr.style.color = "black";
}