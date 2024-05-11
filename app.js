const scoreBoard = document.querySelector(".score-board");
let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissor = document.getElementById("s");
let result = document.querySelector('.result');

let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;
let smallUser = addSubTag("user");
let smallComp = addSubTag("comp");

rock.addEventListener("click", () => { game('r') });
paper.addEventListener("click", () => { game('p') }) ;
scissor.addEventListener("click", () => { game('s') });

function computerChoice(){
    let choices = ['r', 'p', 's'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function displayAlert(user, action){
    let img = document.querySelector(`.${user}`);
    img.classList.add(action);
    setTimeout( () =>{
        img.classList.remove(action);
    }, 1000);
}

function addSubTag(text){
  return `<small><sub>${text}</sub></small>`;
}

function win(user, computer){
  userScore++;
  userScore_span.textContent = userScore;
  displayAlert(user, 'alert-success');
  result.innerHTML = `${getFullName(user)}${smallUser}  beat  ${getFullName(computer)}${smallComp}, You win 🏆👍`;
}


function lose(user, computer){
    computerScore++;
    computerScore_span.textContent = computerScore;
    displayAlert(user, 'alert-danger');
    result.innerHTML = `${getFullName(computer)}${smallComp} lost ${getFullName(user)}${smallUser}  . You loses 💔👎`;
}

function draw(user, computer){
    displayAlert(user, 'alert-draw');
    result.innerHTML = `${getFullName(user)}${smallUser}  and ${getFullName(computer)}${smallComp} .It is a draw`;
}

function getFullName(choice){
   if(choice === 'r'){
    choice ='rock';
   } else if (choice === 's'){
    choice = 'scissor';
   } else {
    choice = 'paper';
   }

   return choice;
}

function game(user){
    let computer = computerChoice();
    let choice = user + computer;
    switch (choice) {
        case 'rs':
        case 'pr':
        case 'sp':
          win(user, computer);
          break;
        case 'rp':
        case 'ps':
        case 'sr':
          lose(user, computer);
          break;
        case 'rr':
        case 'ss':
        case 'pp':
          draw(user, computer);
      }
      
}


