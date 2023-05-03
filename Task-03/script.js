const root = document.querySelector("html");

let isRadian = true;
let isLog10 = true;

const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

const follower = document.createElement("div");
follower.classList.add("cursor", "cursor__follower");
root.appendChild(follower);

root.addEventListener("mousemove", (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

function addChar(input, character) {
  if (input.value == null || input.value == "0") input.value = character;
  else input.value += character;
}

function cos(form) {
  form.display.value = Math.cos(form.display.value);
}

function sin(form) {
  form.display.value = Math.sin(form.display.value);
}

function tan(form) {
  form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
}

 // set the initial value of isLog10 to true

function ln(form) {
  const displayValue = document.querySelector('#display').value;
  let result = 0;
  if (isLog10) {
    result = Math.log10(parseFloat(displayValue));
  } else {                                           
    result = Math.log(parseFloat(displayValue));
  }
  document.querySelector('#display').value = result;
}
// Done: Update the display value with log10 of the input

  // Done: Update the display value with log of the input

function exp(form) {
  form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
  input.value = input.value.substring(0, input.value.length - 1);
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length);
  else input.value = "-" + input.value;
}

function compute(form) {
  form.display.value = eval(form.display.value);
}

function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value);
}

function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (
        ch != "/" &&
        ch != "*" &&
        ch != "+" &&
        ch != "-" &&
        ch != "." &&
        ch != "(" &&
        ch != ")" &&
        ch != "%" &&
        ch != "s" && ch != "i" && ch != "n" &&
        ch != "c" && ch != "o" && ch != "s" &&
        ch != "t" && ch != "a" && ch != "n"
      ) {
        alert("invalid entry!");
        return false;
      }
    }
  }
  return true;
}//bug fixed

function switchTheme() {
    var calculatorContainer = document.querySelector('.calculator');
    calculatorContainer.classList.toggle('dark');
    // Done : toggle the dark class on the calculator element
    // Done : You may further move with your own css to change the theme of the calculator
}


function toggleRad() {
  isRadian = !isRadian;
  const message = isRadian ? "Converting to radian mode" : "Converting to degree mode";
  alert(message);
  const radDegBtn = document.querySelector('.themeSwitchButton');

  const displayValue = document.querySelector('#display').value;
  let convertedValue = "";

  if (isRadian) {
    convertedValue = parseFloat(displayValue) * Math.PI / 180;
  } else {
    convertedValue = parseFloat(displayValue) * 180 / Math.PI;
  }

  document.querySelector('#display').value = convertedValue;
}
// DONE: perform the necessary conversion and update the #display value


  // Done: use isLog10 to determine which log function to use and hence update the button text

  function toggleLog() {
    isLog10 = !isLog10;
    const logBtn = document.querySelector('.themeSwitchButton');
    const message = isLog10 ? "Toggle Log Base 10" : "Toggle Natural Log";
    logBtn.value = message;
    alert(message);
  }

