import Ordenes from "../models/Orden.js";
import Cliente from "../models/Cliente.js";
import EstadoOrden from "../models/EstadoOrden.js";
import DetalleOrden from "../models/DetalleOrden.js";
import Productos from "../models/Producto.js";

import RepositoryBase from "./base.js";

const clienteRepository = new RepositoryBase(Ordenes);

const listarOrdenesCliente = async (id) => {
  try {
    const cliente = await Cliente.findByPk(id, {
      attributes: ["id", "nombre", "apellido", "fecha_registro", "correo"],
    });
    if (!cliente) {
      throw new Error("Cliente no encontrado");
    }

    const ordenes = await Ordenes.findAll({
      where: { id_cliente: cliente.id },
      attributes: ["id", "fecha", "total", "id_estado"],
      include: [
        {
          model: EstadoOrden,
          attributes: ["nombre", "id"],
        },
      ],
      order: [
        ["fecha", "DESC"], // Ordenar por el campo 'id' en orden ascendente
      ],
      limit: 10,
    });

    if (!ordenes || ordenes.length === 0) {
      return { cliente, ordenes: [] };
    }

    const ordenesConDetalles = await Promise.all(
      ordenes.map(async (orden) => {
        const detalles = await DetalleOrden.findAll({
          where: { id_orden: orden.id },
          attributes: ["id"],
          include: [
            {
              model: Productos,
              attributes: ["nombre", "url"],
            },
          ],
        });

        return {
          ...orden.toJSON(),
          detalles,
        };
      })
    );

    return { cliente, ordenes: ordenesConDetalles };
  } catch (error) {
    console.error("Error al encontrar órdenes del cliente:", error);
    return null;
  }
};

export { listarOrdenesCliente };
