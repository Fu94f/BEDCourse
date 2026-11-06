import { describe, test, expect } from "vitest";
import { checkOutBook, findBook, registerLoan } from "./library";

describe("Library Unit Tests", () => {
    test("findBook returns correct title and copies available", () => {
        const book = findBook("dune");
        expect(book).toEqual({ title: "dune", copiesAvailable: 3});
    });

    test("findBook returns the book, even though it has 0 copies", () => {
        const book = findBook("foundation");
        expect(book).toEqual({ title: "foundation", copiesAvailable: 0});
    });

    test("findBook throws for unknown title", () => {
       expect(() => findBook("harry potter")).toThrow();
    });

    test("findBook throws when title is a number", () => {
       expect(() => findBook(42)).toThrow();
    });

    test("checkOutBook returns a number", () => {
        const loanId = checkOutBook({ title: "dune", copiesAvailable: 3 });
        expect(typeof loanId).toBe("number");
    });

    test("checkOutBook returns a whole number", () => {
        const loanId = checkOutBook({ title: "dune", copiesAvailable: 3 });
        expect(Number.isInteger(loanId)).toBe(true);
    });

    test("checkOutBook returns a number between 1000 and 9999", () => {
        const loanId = checkOutBook({ title: "dune", copiesAvailable: 3 });

        expect(Number.isInteger(loanId)).toBe(true);
        expect(loanId).toBeGreaterThanOrEqual(1000);
        expect(loanId).toBeLessThan(9999);
    });

    test("checkOutBook throw if there are 0 copies available", () => {
        expect(() => checkOutBook({ title: "foundation", copiesAvailable: 0 })).toThrow("No copies available");
    
    });

    test("checkOutBook throw without copiesAvailable", () => {
        expect(() => checkOutBook({ title: "dune"})).toThrow();
    });

    test("registerLoan returns a loan with the given values",()=> {
        const loan = registerLoan(1234, "dune", 7);
        expect(loan).toEqual({ loanId: 1234, title: "dune", memberId: 7 });
    });

    test("registerLoan throws when memberId is 0 ",()=> {
        expect(() => registerLoan(1234, "dune",  0)).toThrow();
    });

    test("registerLoan throws when the title is not in the catalog ",()=> {
        expect(() => registerLoan(1234, "harry potter",  3)).toThrow();
    });



  




   



});

