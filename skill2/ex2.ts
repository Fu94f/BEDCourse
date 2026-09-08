//Delayed Greeting

//Reuse the class's delayedMessage pattern,but write your own version called delayedGreeting
//that takes a name: string, a delay: number, and a callback: () => void. 
// After the delay, it should log "Hi <name>, thanks for waiting!" and then call the callback. 
// Call it with a 1500ms delay and a callback that logs "Callback executed!".


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
    1500,
    () => {
    console.log("callback executed!");
    }
);