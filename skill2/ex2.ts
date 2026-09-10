//Task 5: Checking the Response

//Refactor a fetch function that checks response.ok
//and throws an error on a bad request into async/await.
//Make sure the thrown error is caught and logged with a clear, user-friendly message.

/*
const fetchAdviceById = (id: number) => {
  fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetching did not work");
      }
      return response.json();
    })
    .then((data) => console.log(`Advice ID: ${id}: ${data.slip.advice}`))
    .catch((error) => console.log("Error fetching advice:", error));
};
*/

const fetchAdvice1 = async (id: number): Promise<void> =>{
    try {
        const response =  await fetch(`https://api.adviceslip.com/advice/${id}`);
        //console.log("Status:", response.status, "OK?", response.ok);             //THIS is what i get in terminal Status: 200 OK? true
        if (!response.ok) {                                                        //this block gets skipped and goes to catch 
        throw new Error("Fetching did not work");      
        }

        const data = await response.json();                             
        //if (!data.slip) {
        //throw new Error("No advice found for that ID");                 // this checks if the data doesnt have a slip key to throw the error 
         //}

        console.log(`Advice ID: ${id}: ${data.slip.advice}`);
        
    } catch (error) {
        console.log("Can't load advice :", error);
        
    }
};


//fetchAdvice1(9999);

// tried another with API

const fetchAdvice2 = async (id: number): Promise<void> =>{
    try {
        const response =  await fetch(`https://api.adviceslip.com/this-doest-exist`);
        console.log("Status:", response.status, "OK?", response.ok);    
        if (!response.ok) {
        throw new Error("Fetching did not work");
        }

        const data = await response.json();
        console.log(`Advice ID: ${id}: ${data.slip.advice}`);
        
    } catch (error) {
        console.log("Can't load advice :", error);
        
    }
};

fetchAdvice2(3);