import modelUsuario from '../../../models/usuario.js'
import modelPersona from '../../../models/persona.js'
// Orden
import modelOrden from '../../../models/orden.js'
import modelOrdEstado from '../../../models/ordenEstado.js'
// Producto
import modelDetalle from '../../../models/detalle.js'
import modelProducto from '../../../models/producto.js'

let usuarios = [...modelUsuario];
let personas = [...modelPersona];
let ordenes = [...modelOrden];
let ordenEstado = [...modelOrdEstado];
let detalles = [...modelDetalle];
let productos = [...modelProducto];

const findOne = (id) => {
    const usuarioId = parseInt(id);
    const usuario = usuarios.find(usuario => usuario.id === usuarioId);

    if (usuario !== undefined) {
        // Encontrar a la persona
        let persona = personas.find(persona => persona.id === usuario.persona_id);

        // Encontrar las ordenes del usuario
        const ordenesUsuario = ordenes
            .filter(orden => orden.usuario_id === usuarioId)
            .sort((a, b) => new Date(b.fecha) - new Date(a.fecha)) // Ordena las ordenes por fecha, de mas reciente a mas antigua
            // Agregar los detalles de los productos a cada orden
            .map(orden => {
                const detallesOrden = detalles
                    .filter(detalle => detalle.orden_id === orden.id)
                    // Rescate de la informacion del producto
                    .map(detalle => {
                        const producto = productos.find(producto => producto.id === detalle.producto_id);
                        if (producto) {
                            return {    // Retorno especifico de informacion del producto
                                id: producto.id,
                                title: producto.title,
                                orden_id: detalle.orden_id
                            };
                        }
                        return null;
                    }).filter(producto => producto !== null); // Filtrar productos nulos

                // Agregar estado de la orden
                const ordEstado = ordenEstado.find(ordEstado => ordEstado.id === orden.estado_id);
                const estado = ordEstado ? ordEstado.nombre : "Estado desconocido";

                return {
                    ...orden,
                    estado,
                    productos: detallesOrden    // Retorno de la lista de productos
                };
            })
            // Retornar solo los 10 primeros
            .slice(0, 10);

        return {
            id: usuario.id,
            nombre: `${persona.nombre}, ${persona.apellido}`,
            correo: usuario.correo,
            fechaRegistro: usuario.fechaRegistro,
            ordenes: ordenesUsuario // Retorno de la lista de ordenes
        };
    } else {
        return undefined;
    }
};



const middleware = { findOne }

export default middleware;