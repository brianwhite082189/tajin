
// Run with console visible in dev tools

while(true){
    let number = Number(prompt('Enter a number between 1 -10:'));

    let randomNumber = Math.floor(Math.random() * 10);

    if(number === randomNumber){
        console.log(`You guessed the random number!. The number is ${randomNumber}`)
        break;
    } else {
        console.log(`Sorry! The number was ${randomNumber}. Try again`)
    }
};

