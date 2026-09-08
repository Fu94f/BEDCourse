//Challenge (optional): Forcing a Rejection

//Copy the class's myPromise example, 
// but change the logic so it rejects instead of resolves. 
// Make sure your .catch() handles it and logs a clear, 
// user-friendly error message (not just the raw rejection value). 
// Add comments explaining, in your own words, 
// the difference between a Promise that's pending, 
// fulfilled, and rejected.




// Difference pending, fulfilled, and rejected.

// Pending = the Promise hasn't settle yet, it's not resolved nor rejected;

//Fulfilled = when resolve() is called, the Promise moves from pending state to resolved/fulfilled state
// and then hands the value to .then();

//Rejected = when reject() is called, the Promise moves from pending to reject state and 
// then the value is passed to .catch();


const myPromise = new Promise((resolve, reject) => {
    const  success = false;

    if(success){
        resolve("resolved operation successfully");
    }else {
        reject("Something went wrong...");
    }

});

myPromise
   .then(
    (message) => {
    console.log(message);
    })    
    .catch(
    (error) =>{
    console.log("Ops I did it again! " + error);
});