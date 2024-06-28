import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Usuario from "./Usuario.js";
import EstadoCliente from "./EstadoCliente.js";

const Cliente = sequelize.define(
  "cliente",
  {
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
    apellido: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "cliente", // Nombre real de la tabla en la base de datos
  }
);

Cliente.belongsTo(Usuario, { foreignKey: "id_usuario", targetId: "id" });
Cliente.belongsTo(EstadoCliente, { foreignKey: "id_estado", targetId: "id" });

export default Cliente;
