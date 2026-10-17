const button = document.getElementById("myButton");
const message = document.getElementById("message");

function changeMessage() {
    message.textContent = "Day 2 complete! I am learning JavaScript.";
}

button.addEventListener("click", changeMessage);