// Get elements
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const mixBtn = document.getElementById('mixBtn');
const resultElement = document.getElementById('result');

// Add event listener to mix button
mixBtn.addEventListener('click', function() {
  const color1 = color1Input.value.toLowerCase();
  const color2 = color2Input.value.toLowerCase();
  let resultingColor;

  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
          resultingColor = "purple";
          break;
        case "yellow":
          resultingColor = "orange";
          break;
        default:
          resultingColor = "Invalid color combination";
          break;
      }
      break;
    case "blue":
      switch (color2) {
        case "red":
          resultingColor = "purple";
          break;
        case "yellow":
          resultingColor = "green";
          break;
        default:
          resultingColor = "Invalid color combination";
          break;
      }
      break;
    case "yellow":
      switch (color2) {
        case "red":
          resultingColor = "orange";
          break;
        case "blue":
          resultingColor = "green";
          break;
        default:
          resultingColor = "Invalid color combination";
          break;
      }
      break;
    default:
      resultingColor = "Invalid color combination";
      break;
  }

  resultElement.innerText = `Resulting color: ${resultingColor}`;
});
