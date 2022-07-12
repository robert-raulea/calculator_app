const display = document.querySelector(".display");
const btns = document.querySelector(".btns");
const maxLength = 25;

btns.addEventListener("click", (e) => {
  if (e.target.parentNode === btns) {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          if (!display.innerText.includes("//")) {
            display.innerText = Function("return " + display.innerText)();
          } else displayOut.innerText = "Please enter a valid operation!";
        } catch (error) {
          display.innerText = "Please enter a valid operation!";
          console.log(error);
        }
        break;
      case "⇐":
        if (display.innerText)
          display.innerText = display.innerText.slice(0, -1);
        break;
      case "n!":
        if (display.innerText === "") break;
        if (Number.isInteger(Number(display.innerText)))
          display.innerText = fact(display.innerText);
        else display.innerText = "Error! Enter an integer";
        break;
      case "x^n":
        if (display.innerText === "") break;
        display.innerText += "**";
        break;
      case "ln":
        if (display.innerText === "") break;
        display.innerText = Math.log(display.innerText);
        break;
      case "√x":
        if (display.innerText === "") break;
        display.innerText = Math.sqrt(display.innerText);
        break;
      case "|x|":
        if (display.innerText === "") break;
        display.innerText = Math.abs(display.innerText);
        break;
      case "2^x":
        if (display.innerText === "") break;
        display.innerText = 2 ** Number(display.innerText);
        break;
      case "π":
        display.innerText = Math.PI;
        break;
      case "e":
        display.innerText = Math.E;
        break;
      case "mod":
        if (display.innerText === "") break;
        display.innerText += "%";
        break;
      case "lg":
        if (display.innerText === "") break;
        display.innerText = Math.log10(display.innerText);
        break;
      case "sin":
        if (display.innerText === "") break;
        display.innerText = sinDeg(display.innerText);
        break;
      case "cos":
        if (display.innerText === "") break;
        display.innerText = cosDeg(display.innerText);
        break;
      case "tg":
        if (display.innerText === "") break;
        display.innerText = tgDeg(display.innerText);
        break;
      case "ctg":
        if (display.innerText === "") break;
        display.innerText = ctgDeg(display.innerText);
        break;
      case "sec":
        if (display.innerText === "") break;
        display.innerText = secDeg(display.innerText);
        break;
      default:
        if (display.innerText.length <= maxLength)
          display.innerText += e.target.innerText;
        else alert("Error! The number is too big");
    }
  }
});

function fact(number) {
  let res = 1;
  if (number < 200) for (let i = 1; i <= number; i++) res *= i;
  else return Infinity;
  return res;
}

function sinDeg(grad) {
  return Math.sin((Math.PI / 180) * grad);
}

function cosDeg(grad) {
  if (grad == 90) return 0;
  return Math.cos((Math.PI / 180) * grad);
}

function tgDeg(grad) {
  return Math.tan((Math.PI / 180) * grad);
}

function ctgDeg(grad) {
  if (grad == 90) return 0;
  return 1 / Math.tan((Math.PI / 180) * grad);
}

function secDeg(grad) {
  return 1 / Math.cos((Math.PI / 180) * grad);
}
