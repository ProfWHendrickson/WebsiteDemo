// Greeting
function greet(name = "World") {
  return `Hello, ${name}!`;
}

function showGreeting() {
  const name = document.getElementById("nameInput").value;
  const message = greet(name || undefined);
  document.getElementById("greeting").textContent = message;
}

// Login verification
function verifyAccount() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("passwd").value.toLowerCase();
  if (username === "ray" && password === "pizza") {
    alert("Congratulations. You are logged in.");
  } else {
    alert("Boo. Hiss. You are hacker. Go away.");
  }
}

// Math functions
function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

function showAdd() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  document.getElementById("mathResult").textContent = `Sum: ${add(num1, num2)}`;
}

function showSquare() {
  const num1 = Number(document.getElementById("num1").value);
  document.getElementById("mathResult").textContent = `Square: ${square(num1)}`;
}

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
const button = document.getElementById("incrementBtn");

button.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
