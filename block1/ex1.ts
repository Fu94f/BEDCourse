
/*
const deliverPackage = () => {
    console.log("waiting for the package");
    setTimeout(() => {
        console.log("deliver package");
    }, 2000);

};

deliverPackage()


type displayDataFunction = (data: string) => void;

const deliverPackage = (displayData : displayDataFunction ) => {
    console.log("waiting for the package");
    setTimeout(() => {
        const data: string = "deliver package";
        displayData(data);

    }, 2000);

};

const displayData = (data: string) : void => {
    console.log(data);
};

deliverPackage(displayData);

type orderStatusFunction = (message : string) => void;

const orderPizza = (orderStatus:orderStatusFunction ):void =>{
    console.log("odering pizza");
    setTimeout(() => {
        const message = "your pizza is ready";
        orderStatus(message);
    }, 3000);
};

const orderStauts = (message : string): void =>{
    console.log(message);
}

orderPizza(orderStauts); 


type printResultFunction = (result: number) => void;


const calculate = (a: number, b: number, printResult: printResultFunction) => {
    const result = a + b ;
    printResult(result);

};

const printResult = (result: number) =>{
    console.log ("the result is", result);
};

calculate(45, 23, printResult);

type showFileFunction = (fileContent: string ) => void;

const downloadFile = (url: string, showFile: showFileFunction) =>{
    console.log("starting Dowload from", url);
    setTimeout(() => {
        const fileContent = `file data from ${url}`;
        showFile(fileContent);
    }, 4000);
};

const showFile = (fileContent: string ) => {
    console.log("downloaded content", fileContent);

};

downloadFile("http//example.com/file.txt", showFile);*/

//HELLO


//Define a callback type helloFunction = (message: string) => void.
// Write an arrow function that takes a callback of this type 
// and calls it with 'Hello from callback!'.

type helloFunction = (message: string) => void;

const greeting = (sayHello:helloFunction) =>{
    console.log("loading greeting");
    setTimeout(() => {
        const message = "Hello from callback";
        sayHello(message);
    }, 3000);

};

const sayHello = (message: string) =>{
    console.log(message);
};

greeting(sayHello);
