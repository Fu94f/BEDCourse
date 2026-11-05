## Exercise 1

## Question: The test is still red. Read the error. Which schema stopped it, and why? Your editor probably shows a red line under menu[pizzaType], yet Vitest still ran the code. What does that tell you about TypeScript types versus Zod checks?

`PizzaSchema` is stopping it at the price field, because the enum accepts “vegetarian” but menu has no key for it, so since  it's undefined (z.number().positive() ) it gets rejected.

The red line is a TypeScript warning but becase Vitest doesnt check types the code runs anyway. Zod, on the hand, throws the error because it checks the values while the program is running.

## Write one more test: orderPizza("vegetarian") returns true. Which file does it belong in, and why?

It belongs to `pizzashop.integration.test.ts` because the test checks the whole work flow, calling `createPizza`, `sendOrder` and `chargeCustomer` and passing the data between them. 

## Exercise 2

## Question: This bug would never have been found without a test. What was it, and what does that tell you about testing error messages?

The bug was a typo in the error message of `chargeCustomer` in `pizzashop.ts`: the code said "cutomer" instead of "customer". I fixed this typo while reading the code, before I wrote the tests, so my tests were green flagged.

I connected the dots when I wrote the test for the `undefined` order ID, I accidentally made a new typo in the test itself ("customr"). The test went red, and the `Expected` and `Received` lines showed a one letter difference. I had initially thought that inserting an error msg was not necessary because the `chargeCustomer` fuction is already supposed to do it but since I keept on not having an error, I tried to with adding the error msg there and I misspelled customer in the test myself.

This tells me that a test with just `.toThrow()` only checks that SOME error happens, as a matter of fact, it passed even with the typo in the message. A test with the exact message checks WHICH error happens, and it catches a single wrong letter. It also tells me that is probably smarter to copy paste the message next time.

