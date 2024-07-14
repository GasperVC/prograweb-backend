import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Orden from "./Orden.js";
import Productos from "./Producto.js";

const DetalleOrden = sequelize.define(
  "detalleorden",
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
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "detalleorden", // Nombre real de la tabla en la base de datos
  }
);

DetalleOrden.belongsTo(Orden, { foreignKey: "id_orden", targetId: "id" });
DetalleOrden.belongsTo(Productos, {
  foreignKey: "id_producto",
  targetId: "id",
});

export default DetalleOrden;
