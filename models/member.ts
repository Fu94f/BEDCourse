import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Member = sequelize.define( "Member", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "members",
  }
);

export default Member;