import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Cliente from "./Cliente.js";
import Pago from "./Pago.js";

const MedioPago = sequelize.define(
  "mediopago",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(20),
      allowNull: true, // Puede ser nullable dependiendo del tipo de pago
    },
    nombre: {
      type: DataTypes.STRING(80),
      allowNull: true, // Puede ser nullable dependiendo del tipo de pago
    },
    vencimiento: {
      type: DataTypes.DATE,
      allowNull: true, // Puede ser nullable dependiendo del tipo de pago
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "mediopago", // Nombre real de la tabla en la base de datos
  }
);

MedioPago.belongsTo(Cliente, { foreignKey: "id_cliente", targetId: "id" });
MedioPago.belongsTo(Pago, { foreignKey: "id_pago", targetId: "id" });

export default MedioPago;
