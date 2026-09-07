//Multiple Messages

//Define a callback type for a single string message. 
// Make an arrow function that takes a callback of this type 
//and calls it three times with three different messages.


type MessageFunction = (message: string) => void;

const Greeting = (printMessage: MessageFunction) => {
    setTimeout(() =>{
          printMessage("Fu");
    }, 1000);

    setTimeout(() =>{
          printMessage("Peppe");
    }, 2000);

    setTimeout(() =>{
          printMessage("an alien invasion!");
    }, 3000);

};

const printMessage = (message: string) => {
    console.log("Hello world, this is", message);
};

Greeting(printMessage);