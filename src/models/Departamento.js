import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Pais from "./Pais.js";

const Departamentos = sequelize.define(
  "departamento",
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
    id_pais: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "departamento", // Nombre real de la tabla en la base de datos
  }
);

Departamentos.belongsTo(Pais, { foreignKey: "id_pais", targetId: "id" });

export default Departamentos;
