// Ordenes
import modelOrden from '../../../models/orden.js'
// Direccion
import modelDireccion from '../../../models/direccion.js'
import modelDistrito from '../../../models/distrito.js'
import modelProvincia from '../../../models/provincia.js'
import modelDepartamento from '../../../models/departamento.js'
import modelPais from '../../../models/pais.js'
// Estados
import modelEnvio from '../../../models/envio.js'
import modelOrdEstado from '../../../models/ordenEstado.js'
// MedioPago
import modelPago from '../../../models/pago.js'
import modelMedioPago from '../../../models/pagoMedio.js'
// Producto
import modelDetalle from '../../../models/detalle.js'
import modelProducto from '../../../models/producto.js'

let ordenes = [...modelOrden];

let direcciones = [...modelDireccion];
let distritos = [...modelDistrito];
let provincias = [...modelProvincia];
let departamentos = [...modelDepartamento];
let paises = [...modelPais];

let modoEnvio = [...modelEnvio];
let ordenEstado = [...modelOrdEstado];

let pagos = [...modelPago];
let mediosPago = [...modelMedioPago];

let detalles = [...modelDetalle];
let productos = [...modelProducto];

const findOne = (id) => {
    const ordenId = parseInt(id);
    // Encontrar la Orden
    const result = ordenes.find(orden => orden.id === ordenId);

    // Encontrar la direccion
    let direccion = direcciones.find(direccion => direccion.id === result.usuarioDireccion_id);
    let distrito = distritos.find(distrito => distrito.id === direccion.distrito_id);
    let provincia = provincias.find(provincia => provincia.id === distrito.provincia_id);
    let departamento = departamentos.find(departamento => departamento.id === provincia.departmento_id);
    let pais = paises.find(pais => pais.id === departamento.pais_id)
    // Crear la lista para la direccion
    const resultDireccion = {
        avenida: direccion.avenida,
        numero: direccion.numero,
        refer: direccion.refer,
        distrito: distrito.name,
        provincia: provincia.name,
        departamento: departamento.nombre,
        pais: pais.nombre
    }

    // Renombrar el envio
    const envio = modoEnvio.find(envio => envio.id === result.envio_id);
    const ordEstado = ordenEstado.find(ordEstado => ordEstado.id === result.estado_id)

    // Crear la lista para el medio de pago
    let pago = pagos.find(pago => pago.id === result.pago_id);
    let medioPago = mediosPago.find(medio => medio.pago_id === pago.id)
    const resultPago = medioPago ? ({
        id: pago.id,
        name: pago.nombre,
        numero: medioPago.numero,
    }) : ({
        id: pago.id,
        name: pago.nombre,
    });

    // Crear la lista de productos por el orden
    const detalle = detalles
        .filter(detalle => detalle.orden_id === ordenId)
        .map(detalle => {
            const producto = productos.find(producto => producto.id === detalle.producto_id);
            return {
                id: producto.id,
                title: producto.title,
                orden_id: detalle.orden_id,
                cantidad: detalle.cantidad,
                precioTotal: detalle.precioTotal
            };
        });

    return {
        id: result.id,
        usuario_id: result.usuario_id,
        numero: result.numero,
        cantidadTotal: result.cantidadTotal,
        fecha: result.fecha,
        subTotal: result.subTotal,
        impuesto: result.impuesto,
        total: result.total,
        productos: detalle,
        pago: resultPago,
        envio: envio,
        estado: ordEstado,
        direccion: resultDireccion
    };
}

const update = (payload) => {
    const index = ordenes.findIndex(orden => orden.id == parseInt(payload.id));

    if (index > -1) {
        ordenes[index] = payload;
        return payload;
    }
    else
        return null;
}

const middleware = { findOne, update }

export default middleware;