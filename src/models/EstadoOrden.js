import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const EstadoOrden = sequelize.define(
  "estadoorden",
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
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "estadoorden", // Nombre real de la tabla en la base de datos
  }
);

export default EstadoOrden;
