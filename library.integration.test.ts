import { borrowBook } from "./library";
import { describe, test, expect } from "vitest";

describe("Library Integration Test", () => {
    test("borrowBook should return a loan with the given title and member ID", () => {
        const loan = borrowBook("dune", 7);

        expect(loan.title).toBe("dune");
        expect(loan.memberId).toBe(7);
    });

    test("borrowBook should return a loan ID between 1000 and 9999", () => {
        const loan = borrowBook("dune", 7);

       expect(loan.loanId).toBeGreaterThanOrEqual(1000);
       expect(loan.loanId).toBeLessThanOrEqual(9999);
    });
});

 