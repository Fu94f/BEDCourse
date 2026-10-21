import express from "express";
import { connectDB } from "./db.js";
import { Book } from "./models/book.js";
import { Author } from "./models/author.js";

const app = express();
const PORT = 3000;
app.use(express.json());



//GET 

/*app.get('/books', async (req,res)=>{
  try {
    const books= await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({error: "Faild to get all books"});
  }
});*/

// GET 

app.get("/books", async (req, res) => {
  try {
    const filter: any = {};
    if (req.query.genre) {
      filter.genre = req.query.genre;
    }

    const sort = (req.query.sort as string) || "title";

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const data = await Book.find(filter).sort(sort).skip(skip).limit(limit).populate("author", "name");
    const total = await Book.countDocuments(filter);

    res.json({ page, limit, total, data });
  } catch (error) {
    res.status(500).json({ error: "Failed to get books" });
  }
});

//POST 

app.post('/books', async (req,res)=>{
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
    
  } catch (error:any) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    } 
    res.status(500).json({error: "Failed to post book"});
  }
});

//GET book by ID

app.get('/books/:id', async (req, res)=>{
  try {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
    
 } catch (error: any) {
  if (error.name === "CastError") {
    return res.status(400).json({ error: "Invalid id" });
  }
  res.status(500).json({error: "Failed to get book by id"});
}
  
});

// GET the books of one author

app.get('/authors/:id/books', async (req, res)=>{
  try {
    const { id } = req.params;
    const author = await Author.findById(id);

    if (!author) {
      return res.status(404).json({ error: "Author not found" })
    }
    
    const books = await Book.find({author:id});
    res.json(books);
  } catch (error: any) {
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid id" });
    }
    res.status(500).json({error: "Failed to get books"});
  }
});



//PUT

app.put('/books/:id', async (req, res)=>{
  try { 
  const { id } = req.params;
  const updatedData = req.body;
  const updatedBook = await Book.findByIdAndUpdate( id, updatedData, {
    new:true,
    runValidators: true,
  });

  if (!updatedBook) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(updatedBook);

 } catch (error: any) {
  if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }
  if (error.name === "CastError") {
    return res.status(400).json({ error: "Invalid id or value" });
  }
  res.status(500).json({
    error: "Failed to update book"
  });
}

});

//DELETE

app.delete('/books/:id', async (req, res)=>{
  try {
  const { id } = req.params;
  const deletedBook = await Book.findByIdAndDelete(id);

  if (!deletedBook) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json({message: "Book deleted successfully", Book: deletedBook});
    
  } catch (error: any) {
  if (error.name === "CastError") {
    return res.status(400).json({ error: "Invalid id" });
  }
  res.status(500).json({
    error: "Failed to delete book"
  });
}

});

//GET Authors

app.get('/authors', async (req,res)=>{
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({error: "Faild to get authors"});
  }
});

//POST

app.post('/authors', async (req, res)=>{
  try {
    const newAuthor= new Author(req.body);
    await newAuthor.save();
    res.status(201).json(newAuthor);

   } catch (error:any) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    } 
    res.status(500).json({error: "Failed to post author"});
  }
});

//GET AUTHOR BY ID

app.get('/authors/:id', async (req, res)=>{
  try {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }

  res.json(author);
    
 } catch (error: any) {
  if (error.name === "CastError") {
    return res.status(400).json({ error: "Invalid id" });
  }
  res.status(500).json({error: "Failed to get author by id"});
}
  
});

//PUT AUTHOR

app.put('/authors/:id', async (req, res)=>{
  try { 
  const { id } = req.params;
  const updatedData = req.body;
  const updatedAuthor = await Author.findByIdAndUpdate( id, updatedData, {
    new:true,
    runValidators: true,
  });

  if (!updatedAuthor) {
    return res.status(404).json({ error: "Author not found" });
  }

  res.json(updatedAuthor);

  } catch (error: any) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid id or value" });
    }
   res.status(500).json({error: "Failed to update author"});
  }
});


// DELETE AUTHOR

app.delete('/authors/:id', async (req, res)=>{
  try {
  const { id } = req.params;
  const deletedAuthor = await Author.findByIdAndDelete(id);

  if (!deletedAuthor) {
    return res.status(404).json({ error: "Author not found" });
  }

  res.json({message: "Author deleted successfully", Author: deletedAuthor});
    
  } catch (error: any) {
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid id" });
    }
    res.status(500).json({ error: "Failed to delete author"});
  }
});



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

