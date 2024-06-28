import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const EstadoCliente = sequelize.define(
  "estadocliente",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "estadocliente", // Nombre real de la tabla en la base de datos
  }
);

export default EstadoCliente;
