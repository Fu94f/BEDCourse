import { borrowBook } from "./library";
import { describe, test, expect } from "vitest";

describe("Library Integration Test", () => {
    test("should returns a loan with the given title and member ID", () => {
        const loan = borrowBook("dune", 7);
        expect(loan.title).toBe("dune");
        expect(loan.memberId).toBe(7);
    });

 
});