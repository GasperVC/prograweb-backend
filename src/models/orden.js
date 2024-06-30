import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Cliente from "./Cliente.js";
import EstadoOrden from "./EstadoOrden.js";
import MedioPago from "./MedioPago.js";
import Envio from "./Envio.js";
import ClienteDireccion from "./ClienteDireccion.js";

const Orden = sequelize.define(
  "orden",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sub_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    impuesto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    cantidad_total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_medioPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_envio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_direccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "orden", // Nombre real de la tabla en la base de datos
  }
);

Orden.belongsTo(Cliente, { foreignKey: "id_cliente", targetId: "id" });
Orden.belongsTo(EstadoOrden, { foreignKey: "id_estado", targetId: "id" });
Orden.belongsTo(MedioPago, { foreignKey: "id_medioPago", targetId: "id" });
Orden.belongsTo(Envio, { foreignKey: "id_envio", targetId: "id" });
Orden.belongsTo(ClienteDireccion, {
  foreignKey: "id_direccion",
  targetId: "id",
});

export default Orden;
