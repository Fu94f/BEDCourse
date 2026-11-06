import { describe, test, expect } from "vitest";
import { findBook } from "./library";

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



   



});

