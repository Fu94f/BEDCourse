//A Different Advice Slip
//Using the class's fetchAdviceById function as a starting point, 
// write your own version called fetchAdviceAndLog that fetches from https://api.adviceslip.com/advice/<id> 
// for three different IDs of your choice, 
// and logs each advice string with its ID. (You can call your function three times, or loop over an array of IDs; your choice.)

//Keep the AdviceSlipType type from class, and make sure your .then() callbacks are typed correctly.

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
            throw new Error("fetching did not work")
        }
        return response.json();
    }).then((data: AdviceSlipType) => {
        const advice = data.slip.advice;
        console.log(`Advice ID: ${id}: ${advice}`);
    })
    .catch((error: unknown) => {
        console.log("Error fetching advice:", error);
    });
};

fetchAdviceAndLog(1);
fetchAdviceAndLog(2);
fetchAdviceAndLog(3);
