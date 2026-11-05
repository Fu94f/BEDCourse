## Exercise 1

## Question: The test is still red. Read the error. Which schema stopped it, and why? Your editor probably shows a red line under menu[pizzaType], yet Vitest still ran the code. What does that tell you about TypeScript types versus Zod checks?

PizzaSchema is stopping it at the price field, because the enum accepts “vegetarian” but menu has no key for it, so since  it's undefined (z.number().positive() ) it gets rejected.

The red line is a TypeScript warning but becase Vitest doesnt check types the code runs anyway. Zod, on the hand, throws the error because it checks the values while the program is running.

## Write one more test: orderPizza("vegetarian") returns true. Which file does it belong in, and why?

It belongs to pizzashop.integration.test.ts because the test checks the whole work flow, calling createPizza, sendOrder and chargeCustomer and passing the data between them. 