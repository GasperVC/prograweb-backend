import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Pais = sequelize.define("pais", {
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
});

export default Pais;
