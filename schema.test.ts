import { describe, test, expect } from "vitest";
import { PizzaTypeSchema, PizzaSchema, AmountSchema, OrderIdSchema} from "./pizzashop";

describe("Schema Tests", () => {
    test("PizzaSchema returns the value for a valid pizza type", () => {
      const result = PizzaTypeSchema.parse("margherita");

      expect(result).toBe("margherita");
    });

    test("PizzaSchema throws an error with capital M", () => {
      expect(() => PizzaTypeSchema.parse("Margherita")).toThrow();
    });

    test("Pizzaschema returns an equal object", ()=>{
        const pizza = PizzaSchema.parse({ type: "pepperoni", price: 120 });
        expect(pizza).toEqual({ type: "pepperoni", price: 120 });
    });

    test("Pizzachema throws, because the price is missing", ()=>{
        expect(() => PizzaSchema.parse({ type: "pepperoni" })).toThrow();
    });

    test("AmountSchema throws when the value is a string", ()=>{
        expect(() => AmountSchema.parse("100")).toThrow();
    });

    test("OrderIdSchema accepts and returns 0", ()=>{
        const result = OrderIdSchema.parse(0);

        expect(result).toBe(0);
    });
});