import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Author = sequelize.define("Author", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },

    name :{
        type:DataTypes.STRING,
        allowNull:false
    }
},
    {
        timestamps:false,
        tableName: "authors"
    }

);

export default Author;