import Cliente from "../models/Cliente.js";
import EstadoCliente from "../models/EstadoCliente.js";
import Usuario from "../models/Usuario.js";
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
        {
          model: Usuario,
          attributes: ["id_rol"],
        },
      ],
      order: [
        ["id", "ASC"], // Ordenar por el campo 'id' en orden ascendente
      ],
    });

    const clientesAplanados = aplanarClientes(clientes);
    return clientesAplanados;
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

const aplanarClientes = (clientes) => {
  return clientes
    .filter((cliente) => cliente.usuario.id_rol === 1)
    .map((cliente) => {
      const { estadocliente, usuario, ...resto } = cliente.toJSON();
      return {
        ...resto,
        estado: estadocliente.nombre,
      };
    });
};

export { clientesRegistrados, actualizarEstadoCliente };
