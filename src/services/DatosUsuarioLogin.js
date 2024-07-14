import Usuario from "../models/Usuario.js"
import Rol from "../models/Rol.js"
import RepositoryBase from "../repositories/base.js"

const ClienteRepository = new RepositoryBase(Usuario)

const findAllComplete = async () => {
    
  const usuarios = await Usuario.findAll({
      include: [
        {
          model: Rol,
          attributes: ["nombre"]
        }
      ,]
  })

  return usuarios
}

const service = { findAllComplete}

export default service