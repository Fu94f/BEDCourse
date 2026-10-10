import express, { type Request, type Response } from "express";
import type { QueryResult } from "pg";
import { z } from "zod";
import { pool } from "./db.js";
import { env } from "./env.js";
import {
	type Author,
	authorSchema,
	type Book,
	bookPatchSchema,
	bookQuerySchema,
	bookSchema,
	idParamSchema,
} from "./schemas.js";

const app = express();
const PORT = env.PORT;

app.use(express.json());

function getErrorMessage(err: unknown): string {
	return err instanceof Error ? err.message : "Unknown error";
}

// GET

app.get("/", (_req: Request, res: Response) => {
	res.send("Welcome to the Library");
});

// GET all books ( + optional query params)

app.get("/books", async (req: Request, res: Response) => {
	const validatedQuery = bookQuerySchema.safeParse(req.query);

	if (!validatedQuery.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedQuery.error) });
	}
	const { genre, sort } = validatedQuery.data;
	const orderBy = sort || "id";

	try {
		let result: QueryResult<Book>;

		if (typeof genre === "string") {
			result = await pool.query<Book>(
				`SELECT * 
                FROM books 
                WHERE genre = $1 
                ORDER BY ${orderBy}`,
				[genre],
			);
		} else {
			result = await pool.query<Book>(
				`SELECT * 
                FROM books 
                ORDER BY ${orderBy}`,
			);
		}
		res.json(result.rows);
	} catch (error) {
		res.status(500).send(getErrorMessage(error));
	}
});

// GET book by id

app.get("/books/:id", async (req: Request, res: Response) => {
	const validatedParams = idParamSchema.safeParse(req.params);

	if (!validatedParams.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedParams.error) });
	}

	const { id } = validatedParams.data;

	try {
		const result = await pool.query<Book>(
			`SELECT * 
            FROM books 
            WHERE id = $1`,
			[id],
		);

		if (result.rows.length === 0) {
			return res.status(404).send("Book not found");
		}

		res.json(result.rows[0]);
	} catch (error) {
		res.status(500).send(getErrorMessage(error));
	}
});

//POST new book

app.post("/books", async (req: Request, res: Response) => {
	const validatedBook = bookSchema.safeParse(req.body);

	if (!validatedBook.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedBook.error) });
	}

	const { title, genre, published_year, author_id } = validatedBook.data;

	try {
		const result = await pool.query<Book>(
			`INSERT INTO books (title, genre, published_year,author_id)
            VALUES ($1, $2, $3, $4) 
            RETURNING * `,
			[title, genre, published_year, author_id],
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		if (error instanceof Error && "code" in error && error.code === "23503") {
			return res.status(400).send("Author does not exist");
		}
		res.status(500).send(getErrorMessage(error));
	}
});

// PUT UPDATE

app.put("/books/:id", async (req: Request, res: Response) => {
	const validatedParams = idParamSchema.safeParse(req.params);

	if (!validatedParams.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedParams.error) });
	}
	const { id } = validatedParams.data;
	const validatedBook = bookSchema.safeParse(req.body);

	if (!validatedBook.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedBook.error) });
	}

	const { title, genre, published_year, author_id } = validatedBook.data;

	try {
		const result = await pool.query<Book>(
			`UPDATE books 
            SET title = $1, 
            genre = $2, 
            published_year = $3,
			author_id = $4
            WHERE id = $5
            RETURNING * `,
			[title, genre, published_year, author_id, id],
		);

		if (result.rows.length === 0) {
			return res.status(404).send("Book not found");
		}

		res.json(result.rows[0]);
	} catch (error) {
		if (error instanceof Error && "code" in error && error.code === "23503") {
			return res.status(400).send("Author does not exist");
		}
		res.status(500).send(getErrorMessage(error));
	}
});

// PARTIAL UPDATE

app.patch("/books/:id", async (req: Request, res: Response) => {
	const validatedParams = idParamSchema.safeParse(req.params);

	if (!validatedParams.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedParams.error) });
	}
	const { id } = validatedParams.data;
	const validatedBook = bookPatchSchema.safeParse(req.body);

	if (!validatedBook.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedBook.error) });
	}

	const { title, genre, published_year, author_id } = validatedBook.data;

	try {
		const result = await pool.query<Book>(
			`UPDATE books SET title = COALESCE($1, title), 
            published_year = COALESCE($2, published_year),
            genre = COALESCE($3, genre),
			author_id = COALESCE($4, author_id)
            WHERE id = $5
            RETURNING *`,
			[title, published_year, genre, author_id, id],
		);

		if (result.rows.length === 0) {
			return res.status(404).send("Book not found");
		}
		res.json(result.rows[0]);
	} catch (error) {
		res.status(500).send(getErrorMessage(error));
	}
});

// DELETE a book

app.delete("/books/:id", async (req: Request, res: Response) => {
	const validatedParams = idParamSchema.safeParse(req.params);

	if (!validatedParams.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedParams.error) });
	}
	const { id } = validatedParams.data;

	try {
		const result = await pool.query<Book>(
			`DELETE FROM books 
            WHERE id = $1 
            RETURNING *`,
			[id],
		);

		if (result.rows.length === 0) {
			return res.status(404).send("Book not found");
		}

		res.send("Book deleted successfully");
	} catch (error) {
		res.status(500).send(getErrorMessage(error));
	}
});

// GET AUTHORS

app.get("/authors", async (_req: Request, res: Response) => {
	try {
		const result = await pool.query<Author>(`SELECT * FROM authors`);

		res.json(result.rows);
	} catch (error) {
		res.status(500).send(getErrorMessage(error));
	}
});

// GET all books by author (JOIN)

app.get("/authors/:id/books", async (req: Request, res: Response) => {
	const validatedParams = idParamSchema.safeParse(req.params);

	if (!validatedParams.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedParams.error) });
	}

	const { id } = validatedParams.data;

	try {
		const result = await pool.query(
			`SELECT books.*
                FROM books
                JOIN authors
                ON books.author_id = authors.id
                WHERE authors.id = $1`,
			[id],
		);

		res.json(result.rows);
	} catch (error) {
		res.status(500).send(getErrorMessage(error));
	}
});

// POST new author

app.post("/authors", async (req: Request, res: Response) => {
	const validatedAuthor = authorSchema.safeParse(req.body);

	if (!validatedAuthor.success) {
		return res
			.status(400)
			.json({ errors: z.flattenError(validatedAuthor.error) });
	}

	const { name } = validatedAuthor.data;

	try {
		const result = await pool.query<Author>(
			`INSERT INTO authors (name) 
            VALUES ($1)
            RETURNING *`,
			[name],
		);

		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).send(getErrorMessage(error));
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
