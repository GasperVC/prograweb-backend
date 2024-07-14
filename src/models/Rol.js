import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Rol = sequelize.define(
  "rol",
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
    tableName: "rol", // Nombre real de la tabla en la base de datos
  }
);



export default Rol;
