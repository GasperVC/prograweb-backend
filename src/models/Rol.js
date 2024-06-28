import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Rol = sequelize.define("rol", {
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
});

export default Rol;
