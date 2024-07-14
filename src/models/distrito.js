import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Provincia from "./Provincia.js";

const Distrito = sequelize.define(
  "distrito",
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
    id_provincia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "distrito", // Nombre real de la tabla en la base de datos
  }
);

Distrito.belongsTo(Provincia, { foreignKey: "id_provincia", targetId: "id" });

export default Distrito;
