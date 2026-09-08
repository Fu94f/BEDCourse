//Handling a Bad Request

//Modify your fetchAdviceAndLog function to also fetch a deliberately invalid ID (e.g. id: 99999999) 
// so the request fails or the response isn't ok. 
// Confirm that your .catch() correctly logs an error instead of crashing. 
// Add a console.log right before the throw new Error(...) line so you can see, 
// in your output, exactly when that path gets triggered.



type AdviceSlipType = {
  slip: {
    id: number;
    advice: string;
  };
};

const fetchAdviceAndLog = (id: number) => {
    const data = fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response: Response) => {
        if(!response.ok){
            console.log("response didn't work");
            throw new Error("fetching did not work")
        }
        return response.json();
    }).then((data: AdviceSlipType) => {
            console.log(data);  
        const advice = data.slip.advice;
        console.log(`Advice ID: ${id}: ${advice}`);
    })
    .catch((error: unknown) => {
        console.log("Error fetching advice:", error);
    });
};

fetchAdviceAndLog(99999);