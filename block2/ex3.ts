//Define two callback types, one for success, one for error. 
// Make an arrow function that takes both as parameters and uses Math.random() to decide which one to call.



type SuccessCallback = (random: number) => void;

type ErrorCallback = (random: number) => void;


const MathRandom = (handleSuccess: SuccessCallback, handleError: ErrorCallback) => {
    const random = Math.floor(Math.random() * 10) + 1;
    if (random > 5){
      handleSuccess(random);  
    } else {
      handleError(random);
    }
};

const handleSuccess = (random: number) =>{      
    console.log(random, "this is a success");
};

const handleError = (random: number) =>{
    console.log(random, "This is an error!")
};

MathRandom(handleSuccess, handleError);