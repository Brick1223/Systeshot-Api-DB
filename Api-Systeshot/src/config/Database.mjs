import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const Users = sequelize.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const Clientes = sequelize.define('Clientes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: Sequelize.STRING,
  apellido: Sequelize.STRING,
  telefono: Sequelize.STRING,
  correo_electronico: Sequelize.STRING,
  direccion: Sequelize.STRING,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const Productos = sequelize.define('Productos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: Sequelize.STRING,
  descripcion: Sequelize.TEXT,
  precio: Sequelize.DECIMAL(10, 2),
  stock: Sequelize.INTEGER,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const Pedidos = sequelize.define('Pedidos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cliente_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Clientes,
      key: 'id'
    }
  },
  fecha: Sequelize.DATE,
  estado: {
    type: Sequelize.ENUM('Pendiente', 'En progreso', 'Completado'),
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const Detalle_pedido = sequelize.define('DetallePedido', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pedido_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Pedidos,
      key: 'id'
    }
  },
  producto_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Productos,
      key: 'id'
    }
  },
  cantidad: Sequelize.INTEGER,
  precio_unitario: Sequelize.DECIMAL(10, 2),
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const Facturas = sequelize.define('Facturas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pedido_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Pedidos,
      key: 'id'
    }
  },
  total: Sequelize.DECIMAL(10, 2),
  fecha_emision: Sequelize.DATE,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const Empleados = sequelize.define('Empleados', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: Sequelize.STRING,
  apellido: Sequelize.STRING,
  cargo: Sequelize.STRING,
  fecha_contratacion: Sequelize.DATE,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const Produccion = sequelize.define('Produccion', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha: Sequelize.DATE,
  descripcion: Sequelize.TEXT,
  responsable_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Empleados,
      key: 'id'
    }
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const Gastos = sequelize.define('Gastos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: Sequelize.TEXT,
  monto: Sequelize.DECIMAL(10, 2),
  fecha: Sequelize.DATE,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const Contabilidad = sequelize.define('Contabilidad', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  concepto: Sequelize.STRING,
  monto: Sequelize.DECIMAL(10, 2),
  fecha: Sequelize.DATE,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

const GestionProduccion = sequelize.define('GestionProduccion', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cantidad_producto: Sequelize.INTEGER,
  nombre_producto: Sequelize.STRING,
  descripcion_producto: Sequelize.TEXT,
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

export {
  sequelize,
  Users,
  Clientes,
  Productos,
  Pedidos,
  Detalle_pedido,
  Facturas,
  Empleados,
  Produccion,
  Gastos,
  Contabilidad,
  GestionProduccion,
};
