import { describe, test, expect } from "vitest";
import { checkOutBook, findBook } from "./library";

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
    })



  




   



});

