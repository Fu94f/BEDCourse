//FILTER + MAP


interface Product{
    id:number;
    name:string;
    price:number;
    tags:string[];
}


const products: Product[] =[
{ 
    id: 1, 
    name: "Laptop", 
    price: 12000, 
    tags: ["work", "power"] 
},
{ 
    id: 2,
    name: "Mouse",
    price: 750,
    tags: ["accessory"] 
},
{   id: 3,
    name: "Keyboard", 
    price: 1000, 
    tags: ["accessory", "work"] 
},
{   id: 4, 
    name: "Monitor", 
    price: 4500, 
    tags: ["work", "display"] 
},
{   id: 5, 
    name: "Headphones", 
    price: 1500, 
    tags: ["audio", "accessory"] 
}
];



console.log(products.filter((p)=> p.tags).map((p)=> p.name));

