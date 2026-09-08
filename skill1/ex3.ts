//Callback with Multiple Parameters

//Write a function type CompareCallback that takes two numbers, a and b, and returns a string.
//Write a function compareNumbers(a: number, b: number, callback: CompareCallback) that calls 
// the callback and returns its result. 
// Call it twice: 
// once with a callback that returns "a is bigger" / "b is bigger" / "equal" depending on the values, 
// and once with a callback that just returns the difference as a string.

type CompareCallback = (a: number, b: number) => string;

const compareNumbers = (a: number, b: number, callback: CompareCallback): string => {
    return callback(a, b);
};

//to return the comparison

//1
console.log(
    compareNumbers(
    25, 
    35, 
    (a: number, b: number): string => {

    if ( a > b){
        return `${a} is bigger`;
    } else if (a < b){
        return `${b} is bigger`;
    } else {
        return `${a} and ${b} are equal`;
    }

    })
);

//2 
console.log(
    compareNumbers(
    25, 
    35, 
    (a: number, b: number): string => {
        return a > b ? `${a} is bigger`: a < b ? `${b} is bigger`:`${a} and ${b} are equal`;
    })
);

// to return a string 

//1
console.log(
    compareNumbers(
    25, 
    35, 
    (a: number, b: number): string => {
        const result = a - b ; 
        return `The difference is ${result}`; 
    })
);


//2
console.log(
    compareNumbers(
    25, 
    35, 
    (a: number, b: number): string => {
        const result = a - b ; 
        return result.toString(); 
    })
);

//3 

console.log(
    compareNumbers(
    25, 
    35, 
    (a: number, b: number): string => {
        const result = a - b ; 
        return String(result); 
    })
);

//4 

console.log(
    compareNumbers(
    25, 
    35, 
    (a: number, b: number): string => {
        const result = a - b ; 
        return "the difference is " + result; 
    })
);
