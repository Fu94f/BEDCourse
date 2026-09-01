//Favourit Car

interface Car{
    brand: string;
    year:number;
}

const printCar = (car: Car)=>{
    console.log(`Brand: ${car.brand},Year: ${car.year}`);
}
printCar({
    brand: "Toyota",
    year:2022
});