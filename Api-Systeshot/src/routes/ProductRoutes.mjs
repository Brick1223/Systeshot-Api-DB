// src/routes/ProductRoutes.mjs
import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/ProductoController.mjs';

const router = express.Router();

// Ruta para obtener todos los productos
router.get('/', getProducts);

// Ruta para obtener un producto por su ID
router.get('/:id', getProductById);

// Ruta para crear un nuevo producto
router.post('/', createProduct);

// Ruta para actualizar un producto existente
router.put('/:id', updateProduct);

// Ruta para eliminar un producto
router.delete('/:id', deleteProduct);

export default router;
