import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Departamento from "./Departamento.js";

const Provincia = sequelize.define("provincia", {
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
});

Provincia.belongsTo(Departamento, {
  foreignKey: "id_departamento",
  targetKey: "id",
});

export default Provincia;
