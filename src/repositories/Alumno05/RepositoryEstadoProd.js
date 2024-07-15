import EstadoProducto from "../../models/EstadoProducto.js";
import RepositoryBase from "../base.js";

const estadoProductoRepository = new RepositoryBase(EstadoProducto);

const listarEstados = async () => {
  try {
    const estados = await EstadoProducto.findAll({
      attributes: ["id", "nombre"],
      order: [["nombre", "ASC"]],
    });
    return estados;
  } catch (error) {
    console.error("Error al listar estados:", error);
    return null;
  }
};

const buscarEstadoPorId = async (id) => {
  try {
    const estado = await EstadoProducto.findByPk(id, {
      attributes: ["id", "nombre"],
    });
    return estado;
  } catch (error) {
    console.error("Error al buscar estado por ID:", error);
    return null;
  }
};

export { listarEstados, buscarEstadoPorId };
