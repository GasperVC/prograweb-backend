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

// Función para obtener la dirección completa
const obtenerDireccionCompleta = (direccionId) => {
    const direccion = direcciones.find(direccion => direccion.id === direccionId);
    if (!direccion) return undefined;   // Caso no encontrar la direccion asociada a la Orden

    const distrito = distritos.find(distrito => distrito.id === direccion.distrito_id);
    const provincia = provincias.find(provincia => provincia.id === distrito.provincia_id);
    const departamento = departamentos.find(departamento => departamento.id === provincia.departmento_id);
    const pais = paises.find(pais => pais.id === departamento.pais_id);

    return {
        avenida: direccion.avenida,
        numero: direccion.numero,
        refer: direccion.refer,
        distrito: distrito?.name,
        provincia: provincia?.name,
        departamento: departamento?.nombre,
        pais: pais?.nombre
    };
};

// Funcion para obtener el detalle de pago
const obtenerPagoDetalle = (pagoId) => {
    const pago = pagos.find(pago => pago.id === pagoId);
    const medioPago = mediosPago.find(medio => medio.pago_id === pago?.id);
    return pago ? ({
        id: pago.id,
        name: pago.nombre,
        numero: medioPago?.numero,
    }) : undefined;
}

// Funcion para obtener el detalle de los productos
const obtenerProductoDetalle = (detalle) => {
    const producto = productos.find(producto => producto.id === detalle.producto_id);
    return producto ? {
        id: producto.id,
        title: producto.title,
        orden_id: detalle.orden_id,
        cantidad: detalle.cantidad,
        precioTotal: detalle.precioTotal
    } : undefined;
}

const findOne = (id) => {
    let ordenID = parseInt(id);

    // Encontrar la orden
    const result = ordenes.find(orden => orden.id === ordenID);
    if (!result) return undefined;          // Caso no encontrar una orden

    const resultDireccion = obtenerDireccionCompleta(result.usuarioDireccion_id);

    const envio = modoEnvio.find(envio => envio.id === result.envio_id);
    const ordEstado = ordenEstado.find(ordEstado => ordEstado.id === result.estado_id);

    // Crear la lista para el medio de pago
    const resultPago = obtenerPagoDetalle(result.pago_id);

    // Crear la lista de productos por la orden
    const detalle = detalles
        .filter(detalle => detalle.orden_id === result.id)
        .map(detalle => obtenerProductoDetalle(detalle))
        .filter(producto => producto !== undefined);

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
};

const remove = (id) => {
    const index = ordenes.findIndex(item => item.id == parseInt(id));

    if (index > -1) {
        ordenes[index].eliminado_id = 0,    // Para filtrar los eliminados
        ordenes.splice(index,1);
        return true;
    } else return false;
}

const update = (payload) => {
    // No corregido, no usado
    const index = ordenes.findIndex(orden => orden.id == parseInt(payload.id));

    if (index > -1) {
        ordenes[index] = payload;
        return payload;
    }
    else
        return null;
}

const middleware = { findOne, remove, update }

export default middleware;