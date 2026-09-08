//Sum with a Named Type

//Declare a function type SumCallback describing a function
// that takes a result: number and returns void.
//Write a function sumNumbers that takes 
// a: number, b: number, and a callback: SumCallback, 
// adds a and b, and passes the result to the callback.
// Call it with two different numbers and 
// log the result inside the callback.



type SumCallback = (result: number) => void;

const sumNumbers = (a: number, b: number, callback: SumCallback): void =>{
    const result = a + b ;
    callback(result);
};

sumNumbers(25, 6, (result: number): void => {
    console.log(`The result is ${result}`);
});