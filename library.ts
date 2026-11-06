import { z } from "zod";

const catalogue = {
  dune: { title: "dune", copiesAvailable: 3 },
  neuromancer: { title: "neuromancer", copiesAvailable: 1 },
  foundation: { title: "foundation", copiesAvailable: 0 },
};

//Schemas

export const BookTitleSchema = z.enum(["dune", "neuromancer", "foundation"]);

export const BookSchema = z.object({
    title: BookTitleSchema ,
    copiesAvailable:z.number().int().nonnegative(),
});

export const LoanIdSchema = z.number().int().nonnegative();


// Types inferred from the schemas
export type BookTitle = z.infer<typeof BookTitleSchema>;
export type Book = z.infer<typeof BookSchema>;

export const findBook = (title: unknown): Book => {
  const bookTitle = BookTitleSchema.parse(title);
  return BookSchema.parse(catalogue[bookTitle]);
};

export const checkOutBook = (book: unknown): number => {
    const validCopy = BookSchema.parse(book);
    if (validCopy.copiesAvailable === 0) {
        throw new Error("No copies available");
    }

    const loanId = Math.floor(Math.random() * 9000) + 1000;
    return loanId;
};