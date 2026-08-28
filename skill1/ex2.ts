//GREETINGS

const formatGreeting = (firstName: string, formal?:boolean):string =>{
    return formal ? `Hi, ${firstName}` :`Good day, ${firstName}`;
};


console.log(formatGreeting("Fulvia", true));
console.log(formatGreeting("Fulvia"));