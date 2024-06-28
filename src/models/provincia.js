import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Departamento from "./Departamentos.js";

const Provincia = sequelize.define(
  "provincia",
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
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "provincia", // Nombre real de la tabla en la base de datos
  }
);

Provincia.belongsTo(Departamento, {
  foreignKey: "id_departamento",
  targetId: "id",
});

export default Provincia;
