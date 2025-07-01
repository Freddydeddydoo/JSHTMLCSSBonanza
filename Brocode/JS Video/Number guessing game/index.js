const minNum = 1;
const maxNum = 100;
const cheerCelebration = new Audio("applause-cheer-236786.mp3");
cheerCelebration.volume = 0.75;

let number =  Math.floor(Math.random() * maxNum + 1) + minNum;
let attempts = 0;
let running = true;


while(running){

    let guessedNumber = Number(window.prompt(`Guess the number! guess a number between ${minNum} and ${maxNum}!`));

    if(isNaN(guessedNumber)){
        window.alert("please enter a valid number!");
        attempts++;
    }
    else if(guessedNumber < minNum || guessedNumber > maxNum){
        window.alert(`please enter a valid value (i.e inbetween ${minNum} and ${maxNum})!`);
        attempts++;
    }else{
        attempts++;
        if(guessedNumber > number){
            window.alert("TOO HIGH! try again!");
        }
        else if(guessedNumber < number){
            window.alert("TOO LOW! Try again!");
        }
        if(guessedNumber === number){
            cheerCelebration.play();
            window.alert(`DING DING! YOU GOT IT! it took you ${attempts} tries`);
            running = false;
        }
    }

}




