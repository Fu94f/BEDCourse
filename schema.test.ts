import { describe, test, expect } from "vitest";
import { PizzaTypeSchema, PizzaSchema, AmountSchema, OrderIdSchema} from "./pizzashop";

describe(" Schema Tests", () => {
    test("PizzaTypeSchema returns the value for a valid pizza type", () => {
      const result = PizzaTypeSchema.parse("margherita");

      expect(result).toBe("margherita");
    });



});