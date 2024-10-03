// Pick a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// how many guesses the player has made
let guesses = 0;

let guess = prompt("Guess a number between 1 and 10:");

// Keep asking for guesses until the player gets it right
while (guess != secretNumber) {
  guesses++;

  // Tell the player if their guess is too high or too low
  if (guess < secretNumber) {
    console.log("Too low! Guess again.");
  } else {
    console.log("Too high! Guess again.");
  }

  // Get the player's next guess
  guess = prompt("Guess again:");
}

// Congratulate the player when they win
console.log("You got it! It took you " + guesses + " guesses.");

//https://l.facebook.com/l.php?u=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Fwhile%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2o5-5YKGR3ycsCvVO-kB1Bgr5jGIgrs7j5hpHBm2owt0HqXCjPC2ZGOTk_aem_WJu38dxku_nx_zNL7qd_Fw&h=AT0HLBDD8jFgcCi_a9NQZS26zzLlSItbkSNAx52HytOvWrMyMRM_Tf6HR5VtQAxMd8qJM0zO1GH0CKDzYsG_fAAhsQk7YIcFT_Wd7G45Uvr1C2wR2P_Ebc1c342KwgalWyqpCZsB-5KZXt8
//https://l.facebook.com/l.php?u=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FMath%2Frandom%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3m2TES7WuSfl43jg3W2HWeraxkzCEZ-VGiLEjST0Mou3eoSJVfSSEi0Wk_aem_ONbhZd696G7bATTETAyyKA&h=AT2xCctkMWnkFVePGDbdDI68qIKYVqGlYQRrtrM914zDhbthXGeupfHLh-Rv50u2LksU3knMEMIC_0y9RJAqc6MAYnEqvgie8bAQFY4LgXvfGOhJH0Gl-IPDoZ5r69-J8TZMRA
//https://l.facebook.com/l.php?u=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWindow%2Fprompt%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3ap1X5aH6PrlgHRPXut3eUCMgjOi-T02vXhZH98rGCyxgALmF6YOHcLOU_aem_Aomk4c0Wk_vinm8wqNUbSg&h=AT2xCctkMWnkFVePGDbdDI68qIKYVqGlYQRrtrM914zDhbthXGeupfHLh-Rv50u2LksU3knMEMIC_0y9RJAqc6MAYnEqvgie8bAQFY4LgXvfGOhJH0Gl-IPDoZ5r69-J8TZMRA
