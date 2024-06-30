import Ordenes from "../models/Orden.js";
import Cliente from "../models/Cliente.js";
import EstadoOrden from "../models/EstadoOrden.js";

import RepositoryBase from "./base.js";

const ordenesRepository = new RepositoryBase(Ordenes);

const listarOrdenes = async () => {
  try {
    const ordenes = await Ordenes.findAll({
      include: [
        {
          model: Cliente,
          attributes: ["nombre", "apellido", "correo"],
        },
        {
          model: EstadoOrden,
          attributes: ["nombre"],
        },
      ],
    });

    return ordenes; // Devolver directamente el arreglo de órdenes
  } catch (error) {
    console.error("Error al localizar ordenes:", error);
    return null;
  }
};

export { listarOrdenes };
