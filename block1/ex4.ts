// Uppercase Callback

//Define a callback type that accepts a string.
//Write an arrow function that takes a string and a callback of that type,
//converts the string to uppercase, and passes the result to the callback.


type CapitalLetterFunction = (message: string) => void;

const toUpperCase = (a: string, printMessage: CapitalLetterFunction) => {
    const message =  a. toUpperCase();
    printMessage(message);
};


const printMessage = (message: string) => {
    console.log (message);
};

toUpperCase("hello callback", printMessage);