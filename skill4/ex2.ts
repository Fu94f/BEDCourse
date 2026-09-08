//Tracing Execution Order

//Take the class's myPromise example and
//add one more console.log of your own right after the .then().catch() chain
//(still inside the main script, not inside .then() or .catch()).
//Predict, in a comment, whether that new log will print before or 
//after the message inside .then(). 
//Run it and confirm whether your prediction was right.

const myPromise = new Promise((resolve, reject) => {
    console.log("1. this executor function strts immidiatly");
    const  success = true;

    if(success){
        console.log("2. operation was successful!");
        resolve("resolved operation successfully");
    }else {
        console.log("2.Operation failed!");
        reject("Resolved operation rejected");
    }

    console.log("3.executor function has finished");
});

myPromise
   .then(
    (message) => {
    console.log(message);
    })    
    .catch(
    (error) =>{
    console.log(error);
});

console.log("test1");

//I think everthing else will print before .then and .catch because
//Js only process their "queue" after it finishes  running all the sync code.

//Order:

//1. this executor function strts immidiatly
//2. operation was successful!
//3.executor function has finished
//test1
//resolved operation successfully


// As expected, only after the main script is finished running, then the "queue" gets processed.
//( or at least that's what I think it's the reason hehe)

