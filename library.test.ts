import { describe, test, expect } from "vitest";
import { findBook } from "./library";

describe("Library Unit Tests", () => {
    test("findBook returns correct title and copies available", () => {
        const book = findBook("dune");
        expect(book).toEqual({ title: "dune", copiesAvailable: 3});
    });
});