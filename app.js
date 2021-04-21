let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  // console.log(Math.floor(Math.random() * 3));
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// getComputerChoice();
// console.log(getComputerChoice());

function convertToWord(letter) {
  switch (letter) {
    case 'r':
      return "Rock";
      break;
    case 'p':
      return "Paper";
      break;
    case 's':
      return "Scissors";
      break;

  }
}

function win(userChoice, computerChoice){
  console.log("You win!");
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // console.log("user score: " + userScore);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win! 🔥";
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥😀`;

  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('green-glow');
  setTimeout(function() {
    userChoice_div.classList.remove('green-glow');
  }, 500);
}

// setTimeout(function() {console.log("YO")}, 2000); // runs the function after 2000 milliseconds



function lose(userChoice, computerChoice){
  console.log("Computer wins!");
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // console.log("user score: " + userScore);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win! 🔥";
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost... 💩`;

  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('red-glow');
  setTimeout(function() {
    userChoice_div.classList.remove('red-glow');
  }, 500);
}
function draw(userChoice, computerChoice){
  console.log("Draw!");

  // userScore_span.innerHTML = userScore;
  // computerScore_span.innerHTML = computerScore;
  // console.log("user score: " + userScore);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win! 🔥";
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} and ${convertToWord(computerChoice)}${smallCompWord}. It's a draw. 😶`;

  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('blue-glow');
  setTimeout(function() {
    userChoice_div.classList.remove('blue-glow');
  }, 500);
}

function game(userChoice) {
  // console.log(" 💩💩💩 "+userChoice);
  const computerChoice = getComputerChoice();
  // console.log("computer choice: " + computerChoice);
  // console.log("user choice: " + userChoice);

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      // console.log("You win!");
      win(userChoice, computerChoice);
      break;

    case "sr":
    case "rp":
    case "ps":
      // console.log("Computer wins!");
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      // console.log("Draw!");
      draw(userChoice, computerChoice);
      break;

  }

}

function main() {
  rock_div.addEventListener("click", function() {
    // console.log("hey, you clicked on rock");
    game("r");
  });

  paper_div.addEventListener("click", function() {
    // console.log("hey, you clicked on paper");
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    // console.log("hey, you clicked on scissors");
    game("s");
  });

}

main();
