const modal = document.getElementById("modal");

const myModalButton1 = document.getElementById("myModalButton1");
const myModalButton2 = document.getElementById("myModalButton2");
const myModalButton3 = document.getElementById("myModalButton3");

const button1 = document.getElementById("okButton");
const button2 = document.getElementById("cancelButton");


myModalButton1.onclick = function() {
  modal.style.display = "block";
}

myModalButton2.onclick = function() {
  modal.style.display = "block";
}

myModalButton3.onclick = function() {
  modal.style.display = "block";
}

button1.onclick = function() {
    modal.style.display = "none";
}

button2.onclick = function() {
    modal.style.display = "none";
}

