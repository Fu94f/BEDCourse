//Your Own Promise

//Create a Promise called checkStock 
//that simulates checking if an item is in stock. 
//Use a boolean variable (inStock)to decide whether to resolve with a success message or reject with a failure message.
// Attach .then() and .catch() to handle both cases and log the result.

//Add a console.log as the very first line inside your executor function, 
//and one more console.log immediately after you create the Promise (outside of it, in the main script).
//Run the code and, in a comment, write down which one prints first and why.


const checkStock = new Promise((resolve, reject) =>{
    console.log("test1");

    const inStock = true;

      if(inStock){
        resolve("item in stock");
    }else {
        reject("item not available in stock");
    }

    

});


console.log("test2");


checkStock
.then((message) => {
    console.log(message);
})    
.catch((error) =>{
    console.log(error);
});

//1 test1 = the new Promise is the executor and runs immidiatly, syncronusly, the console.log is the first line so it prints right away.
//2 test2 prints second right after (in main script)
//3 .then()/.catch()wait to print for the settle risult.