//Task 9: Your Own Async Function
//Write your own brand-new async function (not refactored from existing code)
//that fetches data from an API of your choice (for example a weather API like Open-Meteo),
//handles a bad request with a custom, user-friendly error message, and logs a specific field from the result.
 

const fetchCatFact = async (): Promise<void> =>{
    try {
        const response =  await fetch("https://catfact.ninja/fact");
        //console.log("Status:", response.status, "Status text:", response.statusText);             
        if (!response.ok) {                                                        
        throw new Error("Fetching did not work");      
        }

        const data = await response.json();                             

        console.log(`Here is a cat fact : ${data.fact}`);
        
    } catch (error) {
        console.log("Ops! Something is not working :", error);
        
    } 
};


fetchCatFact();








// USELESS FACT API -  catches an error Status: 500 Status text: Internal Server Error 
const fetchUselessFact = async (): Promise<void> =>{
    try {
        const response =  await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
        // console.log("Status:", response.status, "Status text:", response.statusText);             
        if (!response.ok) {                                                        
        throw new Error("Fetching did not work");      
        }

        const data = await response.json();                             

        console.log(`Useless fact of the day : ${data.text}`);
        
    } catch (error) {
        console.log("Ops! Something is not working :", error);
        
    }
};


fetchUselessFact();