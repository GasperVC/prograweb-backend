import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Cliente from "./Cliente.js";
import Producto from "./Productos.js";

const CarritoCompras = sequelize.define("carritoCompras", {
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
});

CarritoCompras.belongsTo(Cliente, {
  foreignKey: "id_cliente",
  targetKey: "id",
});
CarritoCompras.belongsTo(Producto, {
  foreignKey: "id_producto",
  targetKey: "id",
});

export default CarritoCompras;
