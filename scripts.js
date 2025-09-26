function greet(name = "World") {
  return `Hello, ${name}!`;
}

function verifyAccount() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("passwd").value.toLowerCase();
	if (username == "ray" && password == "pizza") {
		alert("Congratulations. You are logged in.");
	} else {
		alert("Boo. Hiss. You are hacker. Go away.");
	}
}

function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

let count = 0; // holds the number

const countDisplay = document.getElementById("count"); // the <h1> showing the number
const button = document.getElementById("incrementBtn"); // the button element

button.addEventListener("click", () => {
  count++; // increment the number
  countDisplay.textContent = count; // update the display
});


