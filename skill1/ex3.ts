//ask 3: Delayed Message

//Take a promise that resolves after a delay using setTimeout (like delayedMessage from class)
// and refactor the code that calls it to use async/await. 
// Make sure you still await the delay before logging the result.

const delayedMessage = (message: string, delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

const delay = async () => {
    try {
        const message = await delayedMessage("this message is delayed", 4000);
          console.log(message);
          
      
    } catch (error) {
        console.log(error);
        
    }
};

delay();