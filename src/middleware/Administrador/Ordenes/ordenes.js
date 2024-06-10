// Usuario
import modelUsuario from '../../../models/usuario.js'
import modelPersona from '../../../models/persona.js'
// Orden
import modelOrden from '../../../models/orden.js'
import modelOrdEstado from '../../../models/ordenEstado.js'

let usuarios = [...modelUsuario];
let personas = [...modelPersona];
let ordenes = [...modelOrden];
let ordenEstado = [...modelOrdEstado];

const findAll = () => {
    const result = ordenes
        .filter(orden => orden.eliminado_id !== 0)
        .map(orden => {
            //Para el reconocimiento del estado
            let ordEstado = ordenEstado.find(ordEstado => ordEstado.id === orden.estado_id);
            const estado = ordEstado ? ordEstado.nombre : "Estado desconocido";
            // Para identifiacion del usuario
            let usuario = usuarios.find(usuario => usuario.id === orden.usuario_id);
            if (usuario !== undefined) {
                let persona = personas.find(persona => persona.id === usuario.persona_id);

                if (persona !== undefined) {
                    return {
                        id: orden.id,
                        numero: orden.numero,
                        usuario: `${persona.nombre}, ${persona.apellido}`,
                        correo: usuario.correo,
                        fechaOrden: orden.fecha,
                        estado_id: orden.estado_id,
                        estado: estado,
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