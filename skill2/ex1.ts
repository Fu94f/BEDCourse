//Task 4: Fetching Advice

//Take the class's fetchAdvice function (using .then()/.catch() to fetch from the Advice Slip API) 
// and refactor it into an async arrow function using try/catch.

const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => console.log(data.slip.advice))
    .catch((error) => console.log("Error fetching advice:", error));
};

const advise = async () =>{
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log(data.slip.advice);
    } catch (error) {
        console.log("Error fetching advice:", error)
    }
   
};

advise();