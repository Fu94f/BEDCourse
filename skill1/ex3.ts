//PASS OR FAIL

type Result = true | false;

const printResult = (result : Result):string =>{
    if ( result == true){
        return "Pass";
    }
    else {
      return "Fail";  
    }

}

console.log(printResult(true));
console.log(printResult(false));

