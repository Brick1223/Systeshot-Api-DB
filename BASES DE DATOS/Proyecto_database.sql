
CREATE DATABASE IF NOT EXISTS Proyecto_database;
USE Proyecto_database;

-- Tabla de Clientes
CREATE TABLE IF NOT EXISTS Clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    telefono VARCHAR(11),
    correo_electronico VARCHAR(200),
    direccion VARCHAR(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de Productos
CREATE TABLE IF NOT EXISTS Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion TEXT,
    precio DECIMAL(10, 2),
    stock INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de Pedidos
CREATE TABLE IF NOT EXISTS Pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    fecha DATE,
    estado ENUM('Pendiente', 'En progreso', 'Completado'),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

-- Tabla de Detalle_Pedido
CREATE TABLE IF NOT EXISTS Detalle_Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    precio_unitario DECIMAL(10, 2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (pedido_id) REFERENCES Pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
);

-- Tabla de Facturas
CREATE TABLE IF NOT EXISTS Facturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    total DECIMAL(10, 2),
    fecha_emision DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (pedido_id) REFERENCES Pedidos(id)
);

-- Tabla de Empleados
CREATE TABLE IF NOT EXISTS Empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    cargo VARCHAR(50),
    fecha_contratacion DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de Producción
CREATE TABLE IF NOT EXISTS Produccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    descripcion TEXT,
    responsable_id INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (responsable_id) REFERENCES Empleados(id)
);

-- Tabla de Gastos
CREATE TABLE IF NOT EXISTS Gastos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion TEXT,
    monto DECIMAL(10, 2),
    fecha DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de Contabilidad
CREATE TABLE IF NOT EXISTS Contabilidad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    concepto VARCHAR(255),
    monto DECIMAL(10, 2),
    fecha DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de Gestión de Producción
CREATE TABLE IF NOT EXISTS GestionProduccion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cantidad_producto INT,
    nombre_producto VARCHAR(100),
    descripcion_producto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar datos de prueba en Clientes
INSERT INTO Clientes (nombre, apellido, telefono, correo_electronico, direccion) VALUES ('Juan', 'Pérez', '1234567890', 'juan.perez@example.com', 'Calle Falsa 123');

-- Insertar datos de prueba en Productos
INSERT INTO Productos (nombre, descripcion, precio, stock) VALUES ('Producto A', 'Descripción del producto A', 100.00, 20);

-- Insertar datos de prueba en Empleados
INSERT INTO Empleados (nombre, apellido, cargo, fecha_contratacion) VALUES ('Maria', 'Gonzalez', 'Gerente', '2023-06-10');

-- Consultar todos los clientes
SELECT * FROM Clientes;

-- Consultar todos los productos
SELECT * FROM Productos;

-- Consultar todos los empleados
SELECT * FROM Empleados;
