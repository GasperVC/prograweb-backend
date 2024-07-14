import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Cliente from "./Cliente.js";
import Distrito from "./Distrito.js";

const ClienteDireccion = sequelize.define(
  "clientedireccion",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    avenida: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    referencia: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_distrito: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "clientedireccion", // Nombre real de la tabla en la base de datos
  }
);

ClienteDireccion.belongsTo(Cliente, {
  foreignKey: "id_cliente",
  targetId: "id",
});
ClienteDireccion.belongsTo(Distrito, {
  foreignKey: "id_distrito",
  targetId: "id",
});

export default ClienteDireccion;
