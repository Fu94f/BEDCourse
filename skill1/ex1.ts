//Order Confirmation

//Write an arrow function called placeOrder that takes an item: string and a callback: () => void.
//Inside, log "Order placed for <item>", then call the callback. 
// Call placeOrder with an inline callback that logs "Thanks for your order!".
//Then, declare a named function type called OrderCallback for the callback's shape, 
// and refactor placeOrder to use it instead of the inline type.


type OrderCallback = () => void;

const placeOrder= (
    item: string,
     callback: OrderCallback,
    ) =>{
    console.log(`Order placed for ${item}.`);
    callback();
};

placeOrder("Ikea shelf", (): void  => {
    console.log("Thank you for your order!")
});