import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Serie from "./Serie.js";
import Coleccion from "./Coleccion.js";
import Categoria from "./Categoria.js";

const Productos = sequelize.define(
  "producto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    caracteristicas: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_serie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_coleccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Esto NO agregará automáticamente createdAt y updatedAt
    tableName: "producto", // Nombre real de la tabla en la base de datos
  }
);

Productos.belongsTo(Serie, { foreignKey: "id_serie", targetId: "id" });
Productos.belongsTo(Coleccion, { foreignKey: "id_coleccion", targetId: "id" });
Productos.belongsTo(Categoria, { foreignKey: "id_categoria", targetId: "id" });

export default Productos;
