//NESTED AND OPTIONAL PROPERTIES

interface Address{
    city: string;
    postalCode?:string;
}

interface Person{
    name: string;
    age: number;
    address: Address;
}

const person1: Person = {
    name: "Sara",
    age: 31,
    address: { 
        city: "London",

    }
}

const person2: Person = {
    name: "Carl",
    age: 25,
    address: { 
        city: "Malmo",
        postalCode: "21220",
    }
};

console.log(person1.address.city, person2.address.city);