let max=parseInt(prompt("Enter max range number:"));
let random=Math.floor(Math.random()*max)+1;
while(true){
    let guess=prompt("Guess the number: ");
    if(guess=="quit"){
        console.log("You Quit the Game!");
        break;
    }else{
        guess=parseInt(guess);
        if(random==guess){
            console.log("Congratulations you guessed right!");
        break;
        }else if(random<guess){
            console.log("Wrong guess!");
            console.log("Hint: Guess a smaller a number.");
        }else{
            console.log("Wrong guess!");
            console.log("Hint: Guess a bigger a number.");
        }
    }
}
