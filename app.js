let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScoreBoard = document.querySelector("#user-score");
let compScoreBoard = document.querySelector("#comp-score");

//Computer Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

//Draw condition
const drawGame = () => {
    console.log("It's Draw!! Play Again.");
    msg.innerText = `It's Draw`;
    msg.style.backgroundColor = "#1B1A55";
};

//Showwinner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin == true){
        userScore++;
        userScoreBoard.innerText = userScore;
        console.log(`You are winner..`);
        msg.innerText = `You WIN ..!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreBoard.innerText = compScore;
        console.log(`You loss the Game`);
        msg.innerText = `Opps!! You LOSS! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#78060b";
    }
};

const playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    //Generate Compputer choice. modular function
    const compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`);

    if(userChoice === compChoice){
        //draw

        drawGame();
    }

    else{
        let userWin = true;
        if(userChoice === "rock"){
            //User is win if computer choice is paper(loss), scissor(win)
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            //User is win if computer choice is scissor(loss), rock(win)
            userWin = compChoice === "scissor" ? false : true ;
        }
        else{ //userchoice === scissor
            //User is win if computer choice is scissor(loss), rock(win)
            userWin = compChoice === "rock" ? false : true ;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("clicked Choice was", userChoice);
        playGame(userChoice);
    });
});