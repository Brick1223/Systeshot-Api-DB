// EmpleadoController.mjs
import Empleado from '../models/Empleado.mjs';

export const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEmpleado = async (req, res) => {
  const { nombre, apellido, cargo, fecha_contratacion } = req.body;
  try {
    // Convertir la fecha de contratación a un objeto de fecha
    const fechaContratacion = new Date(fecha_contratacion);
    
    // Crear un nuevo empleado con la fecha de contratación
    const nuevoEmpleado = await Empleado.create({ nombre, apellido, cargo, fecha_contratacion });
    
    // Devolver el nuevo empleado creado
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
