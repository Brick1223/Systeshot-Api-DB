// src/routes/pedidoRoutes.mjs
import express from 'express';
import { getPedidos, createPedido, getPedidoById, updatePedido, deletePedido } from '../controllers/PedidoController.mjs';

const router = express.Router();

router.get('/', getPedidos);
router.post('/', createPedido);
router.get('/:id', getPedidoById);
router.put('/:id', updatePedido);
router.delete('/:id', deletePedido);

export default router;
