import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Pais = sequelize.define(
  "pais",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "pais", // Nombre real de la tabla en la base de datos
  }
);

export default Pais;
