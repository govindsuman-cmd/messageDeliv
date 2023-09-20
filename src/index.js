var message = document.getElementById("message");
const output = document.getElementById("output");
const submit = document.getElementById("button");

submit.addEventListener("click", changes);

function changes() {
  output.textContent = message.value;
  message.value = " ";
}
