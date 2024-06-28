import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const EstadoOrden = sequelize.define("estadoOrden", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
});

export default EstadoOrden;
