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

let count = 0;
function IncrementCount()
{
      // Start with a number
    let count = 0;

    // Get references to DOM elements
    const countDisplay = document.getElementById("count");
    const button = document.getElementById("incrementBtn");

    // Add a click event
    button.addEventListener("click", () => {
      count++; // increase by 1
      countDisplay.textContent = count; // update the display
    });
}

