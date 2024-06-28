import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Pais from "./Pais.js";

const Departamentos = sequelize.define("departamento", {
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
});

Departamentos.belongsTo(Pais, { foreignKey: "id_pais", targetKey: "id" });

export default Departamentos;
