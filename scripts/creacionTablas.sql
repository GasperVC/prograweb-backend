-- Clases independientes 9 de 20
CREATE TABLE IF NOT EXISTS Rol (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL
);
CREATE TABLE IF NOT EXISTS Pago (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL
);
CREATE TABLE IF NOT EXISTS EstadoCliente (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
);
CREATE TABLE IF NOT EXISTS EstadoProducto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
);
CREATE TABLE IF NOT EXISTS Pais (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL
);
CREATE TABLE IF NOT EXISTS EstadoOrden (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL
);
CREATE TABLE IF NOT EXISTS Coleccion (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL
);
CREATE TABLE IF NOT EXISTS Categoria (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL
);
CREATE TABLE IF NOT EXISTS Serie (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL
);
CREATE TABLE IF NOT EXISTS Envio (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

-- Clases dependientes 6 de 20
CREATE TABLE IF NOT EXISTS Departamento (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    id_pais INT NOT NULL,
    FOREIGN KEY (id_pais) REFERENCES Pais(id)
);
CREATE TABLE IF NOT EXISTS Provincia (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    id_departamento INT NOT NULL,
    FOREIGN KEY (id_departamento) REFERENCES Departamento(id)
);
CREATE TABLE IF NOT EXISTS Distrito (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    id_provincia INT NOT NULL,
    FOREIGN KEY (id_provincia) REFERENCES Provincia(id)
);
CREATE TABLE IF NOT EXISTS Usuario (
    id SERIAL PRIMARY KEY,
    id_rol INT NOT NULL,
    password VARCHAR(40) NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES Rol(id)
);
CREATE TABLE IF NOT EXISTS Producto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    marca VARCHAR(150) NOT NULL,
    descripcion TEXT,
    url TEXT,
    caracteristicas TEXT,
    stock INT NOT NULL,
    fecha_registro DATE NOT NULL,
    id_serie INT NOT NULL,
    id_coleccion INT NOT NULL,
    id_categoria INT NOT NULL,
    id_estado INT NOT NULL,
    FOREIGN KEY (id_serie) REFERENCES Serie(id),
    FOREIGN KEY (id_coleccion) REFERENCES Coleccion(id),
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id),
    FOREIGN KEY (id_estado) REFERENCES EstadoProducto(id),
);
CREATE TABLE IF NOT EXISTS Cliente (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    apellido VARCHAR(80) NOT NULL,
    fecha_registro DATE NOT NULL,
    correo VARCHAR(150) NOT NULL,
    id_usuario INT NOT NULL,
    id_estado INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
    FOREIGN KEY (id_estado) REFERENCES EstadoCliente(id)
);

-- Clases intermediarias 5 de 20
CREATE TABLE IF NOT EXISTS MedioPago (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(20),
    nombre VARCHAR(80),
    vencimiento DATE,
    id_cliente INT NOT NULL,
    id_pago INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id),
    FOREIGN KEY (id_pago) REFERENCES Pago(id)
);
CREATE TABLE IF NOT EXISTS ClienteDireccion (
    id SERIAL PRIMARY KEY,
    avenida VARCHAR(80) NOT NULL,
    numero VARCHAR(30) NOT NULL,
    referencia VARCHAR(80) NOT NULL,
    id_cliente INT NOT NULL,
    id_distrito INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id),
    FOREIGN KEY (id_distrito) REFERENCES Distrito(id)
);
CREATE TABLE IF NOT EXISTS Orden (
    id SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    sub_total DECIMAL(10, 2) NOT NULL,
    impuesto DECIMAL(10, 2) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    cantidad_total INT NOT NULL,
    id_cliente INT NOT NULL,
    id_estado INT NOT NULL,
    id_medioPago INT NOT NULL,
    id_envio INT NOT NULL,
    id_direccion INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id),
    FOREIGN KEY (id_estado) REFERENCES EstadoOrden(id),
    FOREIGN KEY (id_medioPago) REFERENCES MedioPago(id),
    FOREIGN KEY (id_envio) REFERENCES Envio(id),
    FOREIGN KEY (id_direccion) REFERENCES ClienteDireccion(id)
);
CREATE TABLE IF NOT EXISTS CarritoCompras (
    id SERIAL PRIMARY KEY,
    cantidad INT NOT NULL,
    es_para_despues BOOLEAN NOT NULL,
    id_cliente INT NOT NULL,
    id_producto INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id),
    FOREIGN KEY (id_producto) REFERENCES Producto(id)
);
CREATE TABLE IF NOT EXISTS DetalleOrden (
    id SERIAL PRIMARY KEY,
    cantidad INT NOT NULL,
    precio_total DECIMAL(10, 2) NOT NULL,
    id_orden INT NOT NULL,
    id_producto INT NOT NULL,
    FOREIGN KEY (id_orden) REFERENCES Orden(id),
    FOREIGN KEY (id_producto) REFERENCES Producto(id)
);
