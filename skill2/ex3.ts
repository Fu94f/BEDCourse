//Challenge (optional): Two Timers, One Order

//Call delayedMessage (or your own version) twice in a row:
// once with a delay of 3000 and 
// once with a delay of 1000, 
// each with a different message.
// Before running the code, write down in a comment which message you predict will print first. 
// Then run it, and write down what actually happened, 
// and explain why.


const delayedGreeting = (
    name: string,
    delay: number, 
    callback: () => void
    ) =>{
    setTimeout(() =>{
        console.log(`Hi ${name}, thanks for waiting!`);
        callback();
    }, delay);
};

delayedGreeting(
    "Fu",
    3000,
    () => {
    console.log("test1 executed!");
    }
);

delayedGreeting(
    "F00",
    1000,
    () => {
    console.log("test2 executed!");
    }
);

//I think test2 will print first because it's less amount of time.

//As expected, test2 printed first because:  once test1 is "scheduled", 
//it moves on to the next one without having to wait. 
//Both the timer start running but since the one in test2 is shorter finishes first.