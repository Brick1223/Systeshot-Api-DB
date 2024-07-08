// src/App.mjs
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import ClienteRoutes from './routes/ClientRoutes.mjs';
import AuthRoutes from './routes/AuthRoutes.mjs';
import EmpleadoRoutes from './routes/EmpleadoRoutes.mjs';
import GastoRoutes from './routes/GastoRoutes.mjs';
import PedidoRoutes from './routes/PedidoRoutes.mjs';
import ProductRoutes from './routes/ProductRoutes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware para manejar el formato JSON en las solicitudes
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Montar las rutas en la aplicación
app.use('/api/clientes', ClienteRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/empleados', EmpleadoRoutes);
app.use('/api/gastos', GastoRoutes);
app.use('/api/pedidos', PedidoRoutes);
app.use('/api/productos', ProductRoutes);

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

// Ruta para servir otros archivos HTML
app.get('/*.html', (req, res) => {
  const fileName = req.params[0];
  res.sendFile(path.join(__dirname, 'public', 'html', `${fileName}.html`));
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

export default app;
