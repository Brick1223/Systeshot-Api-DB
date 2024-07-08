import Pedido from '../models/Pedido.mjs';

// Obtener todos los pedidos
export const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo pedido
export const createPedido = async (req, res) => {
  const { fecha, estado } = req.body;
  try {
    const nuevoPedido = await Pedido.create({ fecha, estado });
    res.status(201).json(nuevoPedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un pedido por su ID
export const getPedidoById = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un pedido existente
export const updatePedido = async (req, res) => {
  const { id } = req.params;
  const { fecha, estado } = req.body;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    await pedido.update({ fecha, estado });
    res.json({ message: 'Pedido actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un pedido existente
export const deletePedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id);
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    await pedido.destroy();
    res.json({ message: 'Pedido eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
