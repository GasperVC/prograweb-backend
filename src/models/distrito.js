import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Provincia from "./Provincia.js";

const Distrito = sequelize.define("distrito", {
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
  id_provincia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Distrito.belongsTo(Provincia, { foreignKey: "id_provincia", targetKey: "id" });

export default Distrito;
