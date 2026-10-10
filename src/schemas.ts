import { z } from "zod";

export const bookSchema = z.object({
	title: z.string().min(1, "A book needs a title").max(100),
	genre: z.string().max(50).optional(),
	published_year: z.number().int().min(1000).max(2100),
	author_id: z.number().int().min(1).optional(),
});

export type Book = z.infer<typeof bookSchema> & {
	id: number;
};

export const idParamSchema = z.object({
	id: z.coerce.number().int().positive(),
});

export const bookPatchSchema = bookSchema
	.partial()
	.refine(
		(data) => Object.keys(data).length > 0,
		"at least one field is required",
	);

export const bookQuerySchema = z.object({
	genre: z.string().max(50).optional(),
	sort: z.enum(["title", "published_year", "genre", "author_id"]).optional(),
});

export const authorSchema = z.object({
	name: z.string().min(1, "author needs a name").max(100),
});

export type Author = z.infer<typeof authorSchema> & {
	id: number;
};
