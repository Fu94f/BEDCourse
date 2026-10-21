# MongoDB & Mongoose Homework


### Compare: In Postgres these were NOT NULL, CHECK and a CASE/whitelist. Which felt easier here?

Mongoose feels much easier because the you can write the rules direclty in the schema and add a message on the the same line. Editing is also much easier and quicker.

### Compare: this is the relationships video's one-to-many, but with populate() instead of JOIN.

Populate() was much shorter and easier to write just by adding it to the chain. On the other hand, it requires  more user imput validation and error handling. With Postgress books and authors would be connected with a foreign key and it would automatically give an error if, for example, the author dint existed.


### Possible improvement: a shared error handler

For the sake of repetition as practise, I haven't implemented it in the assignment.I kept the checks inside the routes to practise the try/catch pattern, but a shared function would remove the repetitions and make the messages easier to change in one place.


```ts
import type { Response } from "express";

function handleError(error: any, res: Response, fallbackMessage: string) {
  if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }
  if (error.name === "CastError") {
    return res.status(400).json({ error: "Invalid id or value" });
  }
  res.status(500).json({ error: fallbackMessage });
}
```

Each catch would then be one line

```ts
} catch (error) {
  handleError(error, res, "Failed to update book");
}
```