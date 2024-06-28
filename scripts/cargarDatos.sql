-- Insertar datos en la tabla Rol
INSERT INTO Rol (nombre) VALUES 
('cliente'),
('administrador');

-- Insertar datos en la tabla Pago
INSERT INTO Pago (id, nombre) VALUES 
(1, 'QR'),
(2, 'Tarjeta de Credito'),
(3, 'Tarjeta de Debito'),
(4, 'Tarjeta de Regalo');

-- Insertar datos en la tabla EstadoCliente
INSERT INTO EstadoCliente (id, nombre) VALUES 
(1, 'Activo'),
(2, 'Inactivo');

-- Insertar datos en la tabla Pais
INSERT INTO Pais (id, nombre) VALUES 
('01', 'Peru'),
('02', 'Bolivia');

-- Insertar datos en la tabla EstadoOrden
INSERT INTO EstadoOrden (id, nombre) VALUES 
(1, 'Pendiente'),
(2, 'Por Enviar'),
(3, 'Entregado');

-- Insertar datos en la tabla Coleccion
INSERT INTO Coleccion (id, nombre) VALUES 
(1, 'Ninguno'),
(2, 'Verano'),
(3, 'Invierno');

-- Insertar datos en la tabla Categoria
INSERT INTO Categoria (id, nombre) VALUES 
(1, 'Collar'),
(2, 'Pulseras'),
(3, 'Zapatillas');

-- Insertar datos en la tabla Serie
INSERT INTO Serie (id, nombre) VALUES 
(1, 'Nuevo'),
(2, 'Estreno'),
(3, 'Outlet');

-- Insertar datos en la tabla Envio
INSERT INTO Envio (id, nombre, precio) VALUES 
(1, 'Economico Aereo', 10.00),
(2, 'Envio Prioritario (5 a 10 dias)', 17.00);
