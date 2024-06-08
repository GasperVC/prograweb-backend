// Usuario
import modelUsuario from '../../../models/usuario.js'
import modelPersona from '../../../models/persona.js'
// Estado
import modelUsuEstado from '../../../models/usuarioEstado.js'

let usuarios = [...modelUsuario];
let personas = [...modelPersona];
let estados = [...modelUsuEstado];

const findAll = () => {
    const result = usuarios.map(usuario => {
        let persona = personas.find(persona => persona.id === usuario.persona_id);
        let estado = estados.find(estado => estado.id === usuario.estado_id)

        return {
          id: usuario.id,
          nombre: persona.nombre,
          apellido: persona.apellido,
          correo: usuario.correo,
          fechaRegistro: usuario.fechaRegistro,
          estado: estado.nombre
        };
    })

    return result;
}

const update = (payload) => {
    const index = usuarios.findIndex(usuario => usuario.id == parseInt(payload.id));

    if (index > -1) {
        usuarios[index].estado_id = payload.estado_id;
        return payload;
    }
    else
        return null;
}

const middleware = { findAll, update }

export default middleware;