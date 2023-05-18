const yourWeight = prompt("Enter your weight in killograms");
const yourHeight = prompt("Enter your height in meters");

const bodyMassIndex = yourWeight / Math.pow(yourHeight, 2);

if (bodyMassIndex >= 25) {
  alert(`your weight more ${bodyMassIndex - 25}`);
} else {
  alert(`your weight norm on ${25 - bodyMassIndex}`);
}

alert("You have overweight " + result);
