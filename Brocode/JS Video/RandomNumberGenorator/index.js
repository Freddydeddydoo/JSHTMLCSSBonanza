const diceContainer = document.querySelector(".diceContainer");
const btmRollDice = document.querySelector(".rollDiceBtn");
let diceNum = 6;
let total = 0;

function createDie(number){
    //what will this function do? it will create a die
    const dotPositionMatrix = {
        1 : [[50,50]],
        2 : [[20,20],[80,80]],
        3 : [[20,20], [50,50], [80,80]],
        4 : [[20,20],[80,20],[20,80],[80,80]],
        5 : [[20,20],[80,20],[20,80],[80,80],[50,50]],
        6 : [[20,20],[80,20],[20,80],[80,80],[50,80],[50,20]],
    };

    const die = document.createElement("div");

    die.classList.add("die");

    for(const dotPos of dotPositionMatrix[number]){

        const dot = document.createElement("div");
        dot.classList.add("die_num");
        dot.style.setProperty("--top", dotPos[0] + "%");
        dot.style.setProperty("--left", dotPos[1] + "%");
        die.appendChild(dot);

    }

    return die;
}

for(let i = 0; i < diceNum; i++){
    diceContainer.appendChild(createDie(1));
}


function randomNumberGenerator6() {
   return Math.floor(Math.random() * 6 + 1);
}

btmRollDice.onclick = function() {
    //generate a random number and return it.
    diceContainer.innerHTML = "";
    for(let i = 0; i < diceNum; i ++){
        let currval = randomNumberGenerator6();
        diceContainer.appendChild(createDie(currval));
        total += currval;
    }
    console.log(`current value == ${total}`);
    total = 0;
}


