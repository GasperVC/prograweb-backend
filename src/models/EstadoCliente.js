import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const EstadoCliente = sequelize.define("estadoCliente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

export default EstadoCliente;
