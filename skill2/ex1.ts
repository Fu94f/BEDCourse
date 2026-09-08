//Countdown Timer
//Write a function countdown that takes a seconds: number and a callback: () => void.
// Use setTimeout to wait seconds * 1000 milliseconds, 
//then log "Time's up!" and call the callback. 
// Call countdown(3, () => console.log("Countdown finished.")).

//Add one console.log before the countdown call and one right after it, in your script. 
// Run it and, in a comment above your code, write down the actual order the three logs appear in,
//  and explain in one sentence why that order happens.


// COMMENT

//Order:
//1 Before countdown 
//2 after countdown
//3 Time's up!
//4 Countdown finished.

// console.log("before countdown")prints first beca
// use it's the first "in line",
// then countdown()gets called but because there is setTimout it doesnt stop to wait,
// moves on to the next one which is console.log("after countdown").
// setTimout "schedules" the action for amount of time assigned and prints after 3 sec.
// This is also the reason why "Time's up!"and "Countdown finished" are the last ones to be printed.


const countdown = (seconds : number, callback: () => void) => {
    setTimeout(()=> {
        console.log("Time's up!");
        callback();
    }, seconds * 1000)

};

console.log("Before countdown");
countdown(3, () => console.log("Countdown finished."));
console.log("after countdown");