import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Pais from "./Pais.js";

const Departamento = sequelize.define("departamento", {
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

Departamento.belongsTo(Pais, { foreignKey: "id_pais", targetKey: "id" });

export default Departamento;
