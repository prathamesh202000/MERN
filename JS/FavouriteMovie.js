let favourite="3 idiots";

while(true){
    let guess=prompt("Guess my favourite Movie: ");
    if(favourite==guess){
        console.log("You guessed Correctly!");
        break;
    }else{
        console.log("Sorry wrong guess!");
    }
}