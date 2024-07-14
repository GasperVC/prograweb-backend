import Ordenes from "../models/Orden.js";
import Cliente from "../models/Cliente.js";
import EstadoOrden from "../models/EstadoOrden.js";

import RepositoryBase from "./base.js";

const ordenesRepository = new RepositoryBase(Ordenes);

const listarOrdenes = async () => {
  try {
    const ordenes = await Ordenes.findAll({
      attributes: ["id", "fecha", "total"],
      include: [
        {
          model: EstadoOrden,
          attributes: ["nombre", "id"],
        },
        {
          model: Cliente,
          attributes: ["nombre", "apellido", "correo"],
        },
      ],
      order: [
        ["fecha", "ASC"], // Ordenar por el campo 'id' en orden ascendente
      ],
    });
    const ordenesAplanados = aplanarOrdenes(ordenes);
    return ordenesAplanados; // Devolver directamente el arreglo de órdenes
  } catch (error) {
    console.error("Error al localizar ordenes:", error);
    return null;
  }
};

const aplanarOrdenes = (ordenes) => {
  return ordenes.map((orden) => {
    const { estadoorden, cliente, ...resto } = orden.toJSON();
    return {
      ...resto,
      estadoorden: estadoorden.nombre,
      id_estado: estadoorden.id,
      nombre: cliente.nombre + " " + cliente.apellido,
      correo: cliente.correo,
    };
  });
};

export { listarOrdenes };
