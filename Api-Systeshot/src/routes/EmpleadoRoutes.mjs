// src/routes/EmpleadoRoutes.mjs
import { Router } from 'express';
import Empleado from '../models/Empleado.mjs';

const router = Router();

// Crear un empleado
router.post('/', async (req, res) => {
  try {
    const empleado = await Empleado.create(req.body);
    res.status(201).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los empleados
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un empleado por su ID
router.get('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un empleado por su ID
router.put('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    await empleado.update(req.body);
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un empleado por su ID
router.delete('/:id', async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    await empleado.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
