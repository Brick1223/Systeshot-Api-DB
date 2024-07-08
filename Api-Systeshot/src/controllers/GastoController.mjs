// gastoController.mjs
import Gasto from '../models/Gasto.mjs';

// Función para obtener todos los gastos
export const getGastos = async (req, res) => {
  try {
    const gastos = await Gasto.findAll();
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Función para crear un nuevo gasto
export const createGasto = async (req, res) => {
  const { descripcion, monto, fecha } = req.body;
  try {
    const nuevoGasto = await Gasto.create({ descripcion, monto, fecha });
    res.status(201).json(nuevoGasto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Función para obtener un gasto por su ID
export const getGastoById = async (req, res) => {
  const { id } = req.params;
  try {
    const gasto = await Gasto.findByPk(id);
    if (!gasto) {
      return res.status(404).json({ message: 'Gasto no encontrado' });
    }
    res.status(200).json(gasto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Función para actualizar un gasto por su ID
export const updateGasto = async (req, res) => {
  const { id } = req.params;
  const { descripcion, monto, fecha } = req.body;
  try {
    const gasto = await Gasto.findByPk(id);
    if (!gasto) {
      return res.status(404).json({ message: 'Gasto no encontrado' });
    }
    await gasto.update({ descripcion, monto, fecha });
    res.status(200).json(gasto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Función para eliminar un gasto por su ID
export const deleteGasto = async (req, res) => {
  const { id } = req.params;
  try {
    const gasto = await Gasto.findByPk(id);
    if (!gasto) {
      return res.status(404).json({ message: 'Gasto no encontrado' });
    }
    await gasto.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
