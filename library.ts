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

export const LoanIdSchema = z.number().int().positive();
export const MemberIdSchema = z.number().int().positive();

export const LoanSchema = z.object({
    loanId:LoanIdSchema,
    title:BookTitleSchema,
    memberId:MemberIdSchema,
});


// Types inferred from the schemas
export type BookTitle = z.infer<typeof BookTitleSchema>;
export type Book = z.infer<typeof BookSchema>;
export type Loan = z.infer<typeof LoanSchema>;

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

export const registerLoan = (loanId: unknown, title: unknown, memberId: unknown): Loan => {
    const validLoan = LoanSchema.parse({loanId, title, memberId});
    return validLoan;
};

export const borrowBook = (title: unknown, memberId: unknown): Loan =>{
    const book = findBook(title);
    const loanId = checkOutBook(book);
    return registerLoan(loanId, book.title, memberId);
};