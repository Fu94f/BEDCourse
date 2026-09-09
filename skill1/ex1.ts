//Task 1: Coin Flip

//Take a coin-flip promise like this one and refactor it so it's called using async/await with try/catch, instead of .then()/.catch().

const flipCoin = () => {
  return new Promise((resolve, reject) => {
    const outcome = Math.random() > 0.5;
    outcome ? resolve("You win!") : reject("You lose!");
  });
};

const asyncFunction = async () => {
    try {
        const result = await flipCoin();
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
};

asyncFunction();
