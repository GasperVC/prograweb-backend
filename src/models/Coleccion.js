import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Coleccion = sequelize.define(
  "coleccion",
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
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "coleccion", // Nombre real de la tabla en la base de datos
  }
);

export default Coleccion;
