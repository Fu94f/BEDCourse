//Task 7: Combining a Promise and a Fetch

//Refactor a function that flips a coin and — only if the result is a "win" — fetches advice from the API, 
// all using .then() chains, into a single async function using await and try/catch.
// If the coin flip "loses," log an appropriate message instead of fetching.


const flipCoin = (): Promise<void> =>  {
  return new Promise((resolve, reject) => {
    const outcome = Math.random() > 0.5;
    outcome ? resolve("You win!") : reject("You lose!");
    console.log(outcome);
  })
    .then((success) =>{ 
        console.log(success); 
        fetch(`https://api.adviceslip.com/advice/${1}`) 
        .then((response) => { 
            if (!response.ok) {
               throw new Error("Fetching did not work");
            }
            return response.json();
        }) 
        .then((data) => console.log(`Advice ID: ${1}: ${data.slip.advice}`)) 
        .catch((error) => console.log("Error fetching advice:", error));
    })

    .catch((fail) => {
      console.log(fail);   
    });

};


const asyncFunction = async () => {
    try {
        const outcome = Math.random() > 0.5;

        if (!outcome) { 
            console.log("You lose!");
            return;
        } else {
            console.log("You win!");  
        }
      
        const response= await fetch(`https://api.adviceslip.com/advice/${1}`) 

        if (!response.ok) {
               throw new Error("Fetching did not work");
        }
            const data = await response.json();
            console.log(`Advice ID: ${1}: ${data.slip.advice}`);
            
    } catch (error) {
            console.log(error);
            
    }
    
        
    
};

asyncFunction();

