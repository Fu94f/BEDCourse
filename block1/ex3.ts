// 3. Math Callback
//Define a callback type that accepts a number.
// Create an arrow function that takes two numbers and a callback of that type. 
// The function should add the numbers and pass the result to the callback
// (don't forget to actually call it!).


type MathFunction = (result: number) => void;

const calculate = (a: number, b: number, printResult: MathFunction ) =>{
    const result = a + b ;
    printResult(result);

};

const printResult = (result: number) =>{
    console.log(`the result is ${result}!`);
};

calculate(22, 34, printResult);