import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Pago = sequelize.define(
  "pago",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "pago", // Nombre real de la tabla en la base de datos
  }
);

export default Pago;
