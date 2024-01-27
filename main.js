let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const obj = [paper, rock, scissors];
    let compc = obj[Math.floor(Math.random() * 3)].getAttribute("id");
    return compc;
}
const drawgame = () => {
    document.getElementById('msg').innerText="Game Draw.Play Again";
    document.getElementById('msg').style.backgroundColor="grey";

    
}
const updateScore =()=>
{
    document.getElementById('u').innerText=userScore;
    document.getElementById('c').innerText=computerScore;
}
const show=(uwin)=>{
if(uwin)
{
userScore++;
document.getElementById('msg').innerText="You Win";
document.getElementById('msg').style.backgroundColor="green";
}
else{
computerScore++;
document.getElementById('msg').innerText="You Loss";
document.getElementById('msg').style.backgroundColor="red";

}
}
const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    

    if (userChoice === compChoice) {
        drawgame();
    }
    else {
        let uwin = true;
        if (userChoice === "rock") {
            uwin = compChoice === "paper" ? false : true;
            show(uwin);
        }
        else if (userChoice === "paper") {
            uwin = compChoice === "rock" ? true : false;
            show(uwin);
        }
        else{
            uwin=compChoice==="rock"?false:true;
            show(uwin);
        }
    }

    updateScore();
}
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});