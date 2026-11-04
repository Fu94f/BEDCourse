import express, { Request, Response } from "express";
import sequelize from "./sequelize";
import { ForeignKeyConstraintError } from "sequelize";
import Book from "./models/book";
import Author from "./models/author";
import Member from "./models/member";
import Loan from "./models/loan";


Author.hasMany(Book, { foreignKey: "author_id" });
Book.belongsTo(Author, { foreignKey: "author_id" });
Member.belongsToMany(Book, { through: Loan, foreignKey: "member_id", otherKey: "book_id" });
Book.belongsToMany(Member, { through: Loan, foreignKey: "book_id", otherKey: "member_id" });

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

//GET

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Library");
});

//GET books
app.get("/books", async (req: Request, res: Response) => {
    try {
        const books = await Book.findAll({include: { model: Author, attributes: ["name"] }, });
        res.json(books);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});

//GET book by id
app.get('/books/:id', async (req: Request, res: Response) =>{
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0){
        return res.status(400).send("ID must be a number");
    }

    try {
        const book = await Book.findByPk(id);
        
        if (!book) {
            return res.status(404).send("Book not found");
        }
        res.json(book);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});

//POST book
app.post('/books', async (req: Request, res: Response) =>{
    const{ title, genre, published_year, author_id } = req.body;

    try {
        const book = await Book.create({ title, genre, published_year, author_id });
        res.status(201).json(book);
        
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});

//PUT book
app.put('/books/:id', async (req: Request, res: Response) =>{
    const id = Number(req.params.id);
    const{ title, genre, published_year} = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).send("ID must be a number");
    }

    if (!title) {
        return res.status(400).send("Title is required");
    }

    try {
        const book = await Book.findByPk(id);
        
        if (!book) {
            return res.status(404).send("Book not found");
        }
        await book.update({ title, genre, published_year });
        res.json(book);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
        
    }
});

//DELETE book

app.delete('/books/:id', async (req: Request, res: Response) =>{
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).send("ID must be a number");
    }

    try {
        const book = await Book.findByPk(id);
        
        if (!book) {
            return res.status(404).send("Book not found");
        }
        await book.destroy();
        res.json(book);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});

//GET authors
app.get("/authors", async (req: Request, res: Response) => {
    try {
        const authors = await Author.findAll();
        res.json(authors);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});
//GET author by id

app.get('/authors/:id', async (req: Request, res: Response) =>{
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0){
        return res.status(400).send("ID must be a number");
    }

    try {
        const author = await Author.findByPk(id);
        
        if (!author) {
            return res.status(404).send("Author not found");
        }
        res.json(author);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});


//GET  an author with all their books
app.get("/authors/:id/books", async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).send("ID must be a number");
    }

    try {
        const author = await Author.findByPk(id, { include: Book });

        if (!author) {
            return res.status(404).send("Author not found");
        }
        res.json(author);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});



//POST author 
app.post('/authors', async (req: Request, res: Response) =>{
    const{ name } = req.body;

    if (!name) {
        return res.status(400).send("Name is required");
    }

    try {
        const author = await Author.create({ name});
        res.status(201).json({ message: "Author successfully", author });
        
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});


//DELETE author

app.delete('/authors/:id', async (req: Request, res: Response) =>{
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).send("ID must be a number");
    }

    try {
        const author = await Author.findByPk(id);
        
        if (!author) {
            return res.status(404).send("Author not found");
        }
        await author.destroy();
        res.json({ message: "Author deleted successfully", author });
    } catch (error) {
        if (error instanceof ForeignKeyConstraintError) {
            return res.status(409).send("Author still has books and cannot be deleted");
        }
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});

// POST loans

app.post("/loans", async (req: Request, res: Response) => {
    const { member_id, book_id } = req.body;

    if (!member_id || !book_id) {
        return res.status(400).send("member_id and book_id are required");
    }

    try {
        const member = await Member.findByPk(member_id);
        if (!member) {
            return res.status(404).send("Member not found");
        }

        const book = await Book.findByPk(book_id);
        if (!book) {
            return res.status(404).send("Book not found");
        }

        const loan = await Loan.create({ member_id, book_id });
        res.status(201).json(loan);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});

//GET members id

app.get("/members/:id/loans", async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).send("ID must be a number");
    }

    try {
        const member = await Member.findByPk(id, {
            include: {
                model: Book,
                through: { attributes: ["loan_date", "returned_at"] },
            },
        });

        if (!member) {
            return res.status(404).send("Member not found");
        }
        res.json(member);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : "Unknown error");
    }
});



async function start() {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

start();