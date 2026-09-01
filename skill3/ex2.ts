//PIZZA ORDER

enum PizzaSize{
    Small,
    Medium,
    Large
}

const orderPizza = (pizzaSize : PizzaSize) => {
    if(pizzaSize === PizzaSize.Small){
        console.log("You ordered a Small Pizza");
    }
    else if (pizzaSize === PizzaSize.Medium){
        console.log("You have ordered a Medium Pizza");
    }
    else if (pizzaSize === PizzaSize.Large){
        console.log("You have ordered a Large Pizza")
    }

}

orderPizza(PizzaSize.Small);
orderPizza(PizzaSize.Medium);
orderPizza(PizzaSize.Large);