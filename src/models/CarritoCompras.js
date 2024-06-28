import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Cliente from "./Cliente.js";
import Productos from "./Productos.js";

const CarritoCompras = sequelize.define(
  "carritocompras",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    es_para_despues: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "carritocompras", // Nombre real de la tabla en la base de datos
  }
);

CarritoCompras.belongsTo(Cliente, {
  foreignKey: "id_cliente",
  targetId: "id",
});
CarritoCompras.belongsTo(Productos, {
  foreignKey: "id_producto",
  targetId: "id",
});

export default CarritoCompras;
