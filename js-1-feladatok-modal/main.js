const modal = document.getElementById("modal");

const myModalButton = document.getElementById("myModalButton");

const button1 = document.getElementById("okButton");
const button2 = document.getElementById("cancelButton");
const button3 = document.getElementById("close");


myModalButton.onclick = function() {
    const body = document.getElementById('shadow');
    modal.style.display = "block";
    body.classList.toggle('shadow');
}

button3.onclick = function() {
    const body = document.getElementById('shadow');
    body.classList.toggle('shadow');
    modal.style.display = "none";
}

button1.onclick = function() {
    const body = document.getElementById('shadow');
    body.classList.toggle('shadow');
    modal.style.display = "none";
}

button2.onclick = function() {
    const body = document.getElementById('shadow');
    body.classList.toggle('shadow');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const shadow = document.getElementById("shadow");
    if (event.target == shadow) {
      modal.style.display = "none";
      const body = document.getElementById('shadow');
      body.classList.toggle('shadow');
    }
  }
