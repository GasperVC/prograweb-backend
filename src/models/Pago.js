import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Pago = sequelize.define("pago", {
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

export default Pago;
