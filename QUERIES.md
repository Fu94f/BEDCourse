## GET /authors/:id/books

Sequelize printed:

```sql

SELECT "Author"."id", "Author"."name", "Books"."id" AS "Books.id", "Books"."title" AS "Books.title", "Books"."genre" AS "Books.genre", "Books"."published_year" AS "Books.published_year", "Books"."author_id" AS "Books.author_id" FROM "authors" AS "Author" LEFT OUTER JOIN "books" AS "Books" ON "Author"."id" = "Books"."author_id" WHERE "Author"."id" = 1;
``` 
```sql
SELECT * FROM authors 
JOIN books ON authors.id = books.author_id
WHERE author.id = 1;
``` 

## GET /members/:id/loans

Sequelize printed:

```sql
SELECT "Member"."id", "Member"."name", "Books"."id" AS "Books.id", "Books"."title" AS "Books.title", "Books"."genre" AS "Books.genre", "Books"."published_year" AS "Books.published_year", "Books"."author_id" AS "Books.author_id", "Books->Loan"."id" AS "Books.Loan.id", "Books->Loan"."loan_date" AS "Books.Loan.loan_date", "Books->Loan"."returned_at" AS "Books.Loan.returned_at" FROM "members" AS "Member" LEFT OUTER JOIN ( "loans" AS "Books->Loan" INNER JOIN "books" AS "Books" ON "Books"."id" = "Books->Loan"."book_id") ON "Member"."id" = "Books->Loan"."member_id" WHERE "Member"."id" = 1;
``` 

```sql
SELECT * FROM members
JOIN loans ON members.id = loans.member_id
JOIN books ON loans.book_id = books.id
WHERE members.id = 1;
``` 

## Does Sequelize use INNER JOIN or LEFT OUTER JOIN for include? Why do you think it chose that?

Sequelize uses LEFT OUTER JOIN for include because it keeps the main row even when there are no matching rows in the other table. With an INNER JOIN, for example if there  is an author with no books disappears from the result, the route would answer "Author not found" even if it exist in the database.

## What’s different between its SQL and yours? Look at the aliases and the column names.

Here are some diffrences I have noticed :

- Sequelize builds its aliases from the model names in the code: "Author" comes from sequelize.define("Author", ...), and "Books" is the model name Book in plural (because an author has many books)

- Sequelize lists each column one by one instead of calling for everything *. My guess is because it reads the model so it knows all the colomns that it needs.

- Sequelize uses double quotes around every table and column name (without, in Postgres "Author" turns into author).

- Sequelize labels all the columns to avoid having columns with the same name.  

