const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById('game');

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
//the function responds to the clicks on the button elements created in the if statement below.
let userChoice;
let ComputerChoice;

const handleClick= (e)=>{
    
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = 'userChoice: '+userChoice;
    generateComputerChoice();
}
const generateComputerChoice = () =>{
    const randomChoice = choices[ Math.floor(Math.random()* choices.length)];
    ComputerChoice = randomChoice;
    computerChoiceDisplay.innerHTML = "ComputerChoice: " + ComputerChoice;
}

for (let i=0; i <choices.length; i++){

    const button = document.createElement('button');
    button.id = choices[i];//you can delete this if you want to use e.target.Html in the handle click
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick)
    //appending the buttons to the gamegrid element.
    gameGrid.appendChild(button);
}
