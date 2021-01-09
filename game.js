// GLOBAL VARIABLES
const options = ["rock", "paper", "scissors"]
let selectionNum = 0;
let item = document.querySelector("#item");
let button = document.querySelector("#btn");


const selectionListener = () => {
    // event listener to change the option selected.
    item.addEventListener("click", ()=>{
        if (selectionNum < 2){
            selectionNum += 1;
        }else{
            selectionNum = 0;
        }
        item.innerHTML = `<p>${options[selectionNum]}</p>`;
    }, false);
}


const readyListener = () => {
    // listener for the button when your option is ready
    button.addEventListener("click", play);
}

const randomChoice = () => {
    // random choice return for the bot.
    const rand = Math.floor(Math.random() * 3);
    console.log(rand);
    console.log(`Machine Choice: ${rand}`);
    return options[rand];
}


const play = () => {
    // Choices
    const computerChoice = randomChoice();
    const yourChoice = options[selectionNum];
    const selection = computerChoice + yourChoice;
    
    // options
    const rock = options[0];
    const paper = options[1];
    const scissors = options[2];

    // msg result
    let msg = ""

    // comparison
    // if (yourChoice === computerChoice){
    //     msg = "TIE! both selected the same option";
    // }else if(yourChoice === rock && computerChoice === paper || yourChoice === scissors && computerChoice === rock || yourChoice === paper && computerChoice === scissors){
    //     msg = "LOSE!";
    // }else{
    //     msg = "WIN!";
    // }

    switch(selection){
        case `${scissors}${paper}`:
        case `${paper}${rock}`:
        case `${rock}${scissors}`:
            msg = "LOSE!";
            break;
        case `${paper}${scissors}`:
        case `${rock}${paper}`:
        case `${scissors}${rock}`:
            msg = "WIN!";
            break;
        default: 
            msg = "TIE!";
            break;
    }

    // result
    document.querySelector("#result").innerHTML =`
        <h1>${msg}</h1>
        <p>Oponent: ${computerChoice} | Your Choice: ${yourChoice} </p>
    `;
}

const init = () => {
    // init function
    item.innerHTML = `<p>${options[selectionNum]}</p>`;
    selectionListener();
    readyListener();
}

const game = () => {
    // game run function
    init();
}

game()
