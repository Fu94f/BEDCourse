//Task 6: Two Fetches in a Row

//Refactor a function that fetches two different advice IDs, one after the other,
//using .then() chains, into an async function
//where the second fetch only runs after the first one finishes, using await for both.

const fetchAdviceById = (id1: number, id2: number ) => {
  fetch(`https://api.adviceslip.com/advice/${id1}`)

    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetching did not work");
      }
      return response.json();
    })

    .then((data) => {
    console.log(`Advice ID: ${id1}: ${data.slip.advice}`);
    
        fetch(`https://api.adviceslip.com/advice/${id2}`)
        .then((response) => {
            if (!response.ok){ throw new Error("Fetching did not work");
            }
            return response.json();
        })

        .then((data) => {
         console.log(`Advice ID: ${id2}: ${data.slip.advice}`);
        })
        
        .catch((error) => console.log("Error fetching advice:", error));
    })
    
    .catch((error) => console.log("Error fetching advice:", error));

};

//fetchAdviceById(1, 3);


const fetchAdviceByIdAsync = async (id1: number, id2: number): Promise<void> => {

    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${id1}`)

        if (!response.ok) {
          throw new Error("Fetching did not work");
        }
        const data = await response.json();
        console.log(`Advice ID: ${id1}: ${data.slip.advice}`);

        try {
        const response = await fetch(`https://api.adviceslip.com/advice/${id2}`)

        if (!response.ok) {
          throw new Error("Fetching did not work");
        }
        const data = await response.json();
        console.log(`Advice ID: ${id2}: ${data.slip.advice}`);

        
        
    } catch (error) {
        console.log("Error fetching advice:", error);
        
    }


        
    } catch (error) {
        console.log("Error fetching advice:", error);
        
    }
    
}


fetchAdviceByIdAsync(1,3);
