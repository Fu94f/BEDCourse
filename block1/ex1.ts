
//HELLO


//Define a callback type helloFunction = (message: string) => void.
// Write an arrow function that takes a callback of this type 
// and calls it with 'Hello from callback!'.

type HelloFunction = (message: string) => void;

const greeting = (sayHello: HelloFunction) =>{
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
