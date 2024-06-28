import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Serie = sequelize.define(
  "serie",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto agregará automáticamente createdAt y updatedAt
    tableName: "serie", // Nombre real de la tabla en la base de datos
  }
);

export default Serie;
