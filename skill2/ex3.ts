//Favourit Car

interface Car{
    brand: string;
    year:number;
}

const printCar = (car: Car)=>{
    return `Brand: ${car.brand},Year: ${car.year}`);
}
const car = {
    brand: "Toyota",
    year:2022
};

console.log(printCar(car));