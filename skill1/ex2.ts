// Fruit Basket


type Fruit = "apple"| "banana" |"orange";

const eatFruit = (fruit:Fruit): string =>{
  if ( fruit === "banana"){
    return "You ate a " + fruit;
  }
  else {
    return "You ate an " + fruit;  
  }
}

console.log(eatFruit("apple"));
console.log(eatFruit("orange"));
console.log(eatFruit("banana"));