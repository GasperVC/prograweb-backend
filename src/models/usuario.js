import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Rol from "./Rol.js";

const Usuario = sequelize.define("usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  usuario: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
});

Usuario.belongsTo(Rol, { foreignKey: "id_rol", targetKey: "id" });

export default Usuario;
