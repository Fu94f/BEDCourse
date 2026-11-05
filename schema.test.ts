import { describe, test, expect } from "vitest";
import { PizzaTypeSchema, PizzaSchema, AmountSchema, OrderIdSchema} from "./pizzashop";

describe(" Schema Tests", () => {
    test("PizzaTypeSchema returns the value for a valid pizza type", () => {
      const result = PizzaTypeSchema.parse("margherita");

      expect(result).toBe("margherita");
    });

    test("PizzaTypeSchema throws an error with capital M ", () => {
      expect(() => PizzaTypeSchema.parse("Margherita")).toThrow();
    });

    test("Pizzachema returns an equal object", ()=>{
        const pizza = PizzaSchema.parse({ type: "pepperoni", price: 120 })
        expect(pizza).toEqual({ type: "pepperoni", price: 120 });
    });

    test("Pizzachema throws, because the price is missing", ()=>{
        expect(() => PizzaSchema.parse({ type: "pepperoni" })).toThrow();
    });

    




});