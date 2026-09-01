// GENERICS

// WRAP IT UP

const wrapInArray = <T>(item :T):T[] =>{
    return [item];
}

console.log(wrapInArray("cat"));
console.log(wrapInArray(25));