//Temperature Converter

//Declare a function type ConvertCallback describing a function that takes
//a celsius: number and returns a number. 
//Write a function convertTemperature(celsius: number, callback: ConvertCallback) 
//that calls the callback with celsius and returns whatever it returns. 
// Call it twice: once with a callback that converts to Fahrenheit, 
// and once with a callback that converts to Kelvin.
// Log both results.


type ConvertCallback = (celcius: number) => number;

const convertTemperature = (celcius: number, callback: ConvertCallback): number => {
    return callback(celcius);
};

console.log( 
    convertTemperature(
    35,
    (celcius: number): number => {
        return (celcius * 9 / 5) + 32;


    })
);

console.log( 
    convertTemperature(
    35,
    (celcius: number): number => {
        return celcius + 273.15;


    })
);