import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"]},
  genre: {
    type : String,
    enum: {
      values: ["fantasy", "dystopian", "children", "classic"],
      message: "{VALUE} is not a valid genre",
    },
  },
  publishedYear:{
    type: Number,
    min :[868,"The book can't be older than The Diamond Sutra"],
    max: [new Date().getFullYear(), "The publishing year can't be from the future"],
  } ,
  author: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Author" 
  },
},
 { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);