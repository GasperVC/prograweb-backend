import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Orden from "./Orden.js";
import Producto from "./Productos.js";

const DetalleOrden = sequelize.define("detalleOrden", {
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
  precio_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  id_orden: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

DetalleOrden.belongsTo(Orden, { foreignKey: "id_orden", targetKey: "id" });
DetalleOrden.belongsTo(Producto, {
  foreignKey: "id_producto",
  targetKey: "id",
});

export default DetalleOrden;
