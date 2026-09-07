//Math with Different Operations

//Define a callback type that accepts a number result. 
// Write one arrow function that can do addition, subtraction, multiplication, and division.
//  It should take two numbers, an operation string, and a callback of that type, then call the callback with the computed result.



type CallbackResult = (result: number) => void;


const mathOperations = (x: number, y: number, operation: string, handleResult: CallbackResult) => {

  switch (operation) {
    case "add":
       handleResult(x + y);

    case "subtract":
        handleResult(x - y);
        
    case "multiply":
       handleResult(x * y) ;

    case "divide":
        handleResult(x / y);

    };
};

const handleResults = (result: number) => {
    console.log("The result is", result);
};

mathOperations(7, 2, "divide", handleResults);