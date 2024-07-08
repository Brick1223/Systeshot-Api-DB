// src/routes/AuthRoutes.mjs
import express from 'express';
import { login, register, getUsers, getUserById, updateUser, deleteUser } from '../controllers/AuthController.mjs';

const router = express.Router();

// Ruta para iniciar sesión
router.post('/login', login);

// Ruta para registrar un nuevo usuario
router.post('/register', register);

// Ruta para obtener todos los usuarios
router.get('/users', getUsers);

// Ruta para obtener un usuario por su ID
router.get('/users/:id', getUserById);

// Ruta para actualizar un usuario por su ID
router.put('/users/:id', updateUser);

// Ruta para eliminar un usuario por su ID
router.delete('/users/:id', deleteUser);

export default router;
