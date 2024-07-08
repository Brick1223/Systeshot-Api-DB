// src/middlewares/authMiddleware.mjs
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req, res, next) => {
  // Obtenemos el token de autenticación del encabezado de la solicitud
  const token = req.header('Authorization');

  // Verificamos si el token existe
  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. Token de autenticación no proporcionado.' });
  }

  try {
    // Verificamos el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // Pasamos al siguiente middleware o controlador
  } catch (error) {
    // Si el token es inválido, enviamos un mensaje de error
    res.status(401).json({ error: 'Token de autenticación inválido.' });
  }
};

export default authMiddleware;
