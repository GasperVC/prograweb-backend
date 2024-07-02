import Cliente from "../models/Cliente.js"
import Usuario from "../models/usuario.js"

import RepositoryBase from "../repositories/base.js"

const ClienteRepository = new RepositoryBase(Cliente)

const findAllComplete = async () => {
    
  const clientes = await Cliente.findAll({
      include: [
        {
          model: Usuario,
          attributes: ["password","id_rol"]
        }
      ,]
  })

  return clientes
}

const service = { findAllComplete }

export default service