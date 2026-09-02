//UNION TYPES (|)

//ID

type IDType = number | string;

const showID = (id: IDType) : string =>{
    return "Your Id is:" + id;
}

console.log(showID(12345));
console.log(showID("AB123"));

