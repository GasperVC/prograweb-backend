import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Envios = sequelize.define(
  "envio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "envio", // Nombre real de la tabla en la base de datos
  }
);

export default Envios;
