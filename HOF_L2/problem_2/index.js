// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.



function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
  }
  
  function countdownTimer(seconds) {
    let interval = setInterval(function() {
      console.log("Time remaining: " + seconds + " seconds");
      seconds--;
  
      if (seconds < 0) {
        clearInterval(interval);
        let randomNumber = generateRandomNumber();
        console.log("Generated number: " + randomNumber);
      }
    }, 1000); 
  }
  
  let delayInSeconds = 3;
  console.log("Starting countdown...");
  setTimeout(function() {
    countdownTimer(delayInSeconds);
  }, delayInSeconds * 1000); 



 
        

  


  
  