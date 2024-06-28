import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Categoria = sequelize.define("categoria", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
});

export default Categoria;
