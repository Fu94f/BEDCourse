
import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Book = sequelize.define("Book", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    genre :{
        type:DataTypes.STRING,
        
    },
    published_year :{
        type:DataTypes.INTEGER,
    },
    author_id:{
        type:DataTypes.INTEGER
    },
   },
    {
        timestamps:false,
        tableName: "books"
    }

    
);

export default Book;