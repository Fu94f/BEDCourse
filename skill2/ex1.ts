//Countdown Timer
//Write a function countdown that takes a seconds: number and a callback: () => void.
// Use setTimeout to wait seconds * 1000 milliseconds, 
//then log "Time's up!" and call the callback. 
// Call countdown(3, () => console.log("Countdown finished.")).

//Add one console.log before the countdown call and one right after it, in your script. 
// Run it and, in a comment above your code, write down the actual order the three logs appear in,
//  and explain in one sentence why that order happens.

const countdown = (seconds : number, callback: () => void) => {
    setTimeout(()=> {
        console.log("Time's up!");
        callback();
    }, seconds * 1000)

};

console.log("Before countdown");
countdown(3, () => console.log("Countdown finished."));
console.log("after countdown");