import Cliente from '../models/Cliente.mjs';

export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCliente = async (req, res) => {
  const { Nombre, Apellido, Telefono, Correo_Electronico, Direccion } = req.body;
  try {
    const newCliente = await Cliente.create({ Nombre, Apellido, Telefono, Correo_Electronico, Direccion });
    res.status(201).json(newCliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

