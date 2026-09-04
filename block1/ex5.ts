// Pizza Order
//Define an orderStatusFunction callback type. 
// Simulate ordering pizza: the arrow function should use setTimeout to wait 3 seconds 
//and then call the callback with 'Your pizza is ready!'.


type OrderStatusFunction = (message: string) => void;

const orderPizza = (orderStatus : OrderStatusFunction) => {
    console.log("Your order is going in the oven");
    setTimeout(() =>{
        const message = "Your pizza is ready!";
        orderStatus(message);
    }, 3000);

};

const orderStatus = (message: string) => {
    console.log(message);
};

orderPizza(orderStatus);