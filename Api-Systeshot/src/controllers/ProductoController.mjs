// src/controllers/ProductController.mjs
import Producto from '../models/producto.mjs';

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por su ID
export const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const producto = await Producto.findByPk(productId);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  const { nombre, descripcion, precio, stock } = req.body;
  try {
    const newProduct = await Producto.create({ nombre, descripcion, precio, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto existente
export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { Nombre, Descripcion, Precio, Stock } = req.body;
  try {
    const product = await Producto.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    await product.update({ Nombre, Descripcion, Precio, Stock });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Producto.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    await product.destroy();
    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
