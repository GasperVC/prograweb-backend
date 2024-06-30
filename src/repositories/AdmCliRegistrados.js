import Cliente from "../models/Cliente.js";
import EstadoCliente from "../models/EstadoCliente.js";

import RepositoryBase from "./base.js";

const clienteRepository = new RepositoryBase(Cliente);

const clientesRegistrados = async () => {
  try {
    const clientes = await Cliente.findAll({
      include: [
        {
          model: EstadoCliente,
          attributes: ["nombre"],
        },
      ],
      order: [
        ["id", "ASC"], // Ordenar por el campo 'id' en orden ascendente
      ],
    });

    return clientes;
  } catch (error) {
    console.error("Error al obtener los clientes registrados:", error);
    return null;
  }
};

const actualizarEstadoCliente = async (id, nuevoEstadoId) => {
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      throw new Error("Cliente no encontrado");
    }
    cliente.id_estado = nuevoEstadoId;
    await cliente.update(cliente.dataValues, { where: { id } });

    return cliente;
  } catch (error) {
    console.error("Error al actualizar el estado del cliente:", error);
    return null;
  }
};

export { clientesRegistrados, actualizarEstadoCliente };
