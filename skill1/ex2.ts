// Fruit Basket


type Fruit = "apple"| "banana" |"orange";

const eatFruit = (fruit:Fruit) =>{
    if ( fruit === "banana"){
       console.log("You ate a " + fruit);
    }
    else {
      console.log("You ate an " + fruit);  
    }
    

}

eatFruit("apple");
eatFruit("orange");
eatFruit("banana");