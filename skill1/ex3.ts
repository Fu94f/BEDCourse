//PASS OR FAIL

type Result = true | false;

const printResult = (result : Result) =>{
    if ( result == true){
        console.log("Pass");
    }
    else {
      console.log("Fail");  
    }

}

printResult(true);
printResult(false);

