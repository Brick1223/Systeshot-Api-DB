// src/controllers/authController.mjs
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.mjs';
import dotenv from 'dotenv';

dotenv.config();

// Función para registrar un nuevo usuario
export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Hasheamos la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);
    // Creamos un nuevo usuario en la base de datos
    await User.create({ username, password: hashedPassword });
    // Enviamos una respuesta al cliente indicando que el usuario ha sido registrado exitosamente
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    // En caso de error, enviamos un mensaje de error al cliente
    res.status(500).json({ error: err.message });
  }
};

// Función para iniciar sesión
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Buscamos el usuario en la base de datos por su nombre de usuario
    const user = await User.findOne({ where: { username } });
    // Si el usuario no existe, respondemos con un mensaje de error
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Comparamos la contraseña proporcionada con la contraseña almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);
    // Si las contraseñas no coinciden, respondemos con un mensaje de error
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    // Creamos un token de autenticación utilizando JSON Web Token (JWT)
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Enviamos una respuesta al cliente con el token de autenticación
    res.json({ message: 'Authentication successful', token });
  } catch (err) {
    // En caso de error, enviamos un mensaje de error al cliente
    res.status(500).json({ error: err.message });
  }
};

// Función para obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Función para obtener un usuario por su ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Función para actualizar un usuario por su ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.update({ username, password: hashedPassword });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Función para eliminar un usuario por su ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    await user.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
