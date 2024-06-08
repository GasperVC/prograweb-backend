// Usuario
import modelUsuario from '../../../models/usuario.js'
import modelPersona from '../../../models/persona.js'
// Orden
import modelOrden from '../../../models/orden.js'

let usuarios = [...modelUsuario];
let personas = [...modelPersona];
let ordenes = [...modelOrden];

const findAll = () => {
    const result = ordenes
        .map(orden => {
            let usuario = usuarios.find(usuario => usuario.id === orden.usuario_id);
            if (usuario !== undefined) {
                let persona = personas.find(persona => persona.id === usuario.persona_id);

                if (persona !== undefined) {
                    return {
                        id: orden.numero,
                        usuario: `${persona.nombre}, ${persona.apellido}`,
                        correo: usuario.correo,
                        fechaOrden: orden.fecha,
                        estado: orden.estado,
                        total: orden.total
                    };
                }
            }
            return null; // Devuelve null si no se encuentra el usuario o la persona
        })
        .filter(orden => orden !== null); // Filtra los valores null del resultado final

    return result;
};

const middleware = { findAll }

export default middleware;