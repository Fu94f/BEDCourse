// Delayed Greeting

//Define a callback type for a greeting message. 
// Make an arrow function called sayHelloLater that uses setTimeout to wait 2 seconds,
// then calls the callback with 'Hi, I am late!'.

type GreetingFunction = ( message : string) => void;

const sayHelloLater= (showGreeting: GreetingFunction) => {
    console.log("loading greeting");
    setTimeout(() => {
        const message = "Hi, I am late!";
        showGreeting(message);
    }, 2000);

};

const showGreeting = (message: string) =>{
    console.log (message);
};

sayHelloLater(showGreeting);
