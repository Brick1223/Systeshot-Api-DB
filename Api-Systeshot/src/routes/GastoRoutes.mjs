import express from 'express';
import { getGastos, createGasto, getGastoById, updateGasto, deleteGasto } from '../controllers/GastoController.mjs';

const router = express.Router();

// Ruta para obtener todos los gastos
router.get('/', getGastos);

// Ruta para obtener un gasto por su ID
router.get('/:id', getGastoById);

// Ruta para crear un nuevo gasto
router.post('/', createGasto);

// Ruta para actualizar un gasto por su ID
router.put('/:id', updateGasto);

// Ruta para eliminar un gasto por su ID
router.delete('/:id', deleteGasto);

export default router;
