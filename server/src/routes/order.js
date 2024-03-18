import express from 'express'
import { postOrderDetails, getAllOrders } from '../controllers/order.js';

const router = express.Router();

router.post('/postorder', postOrderDetails)
router.get('/orderhistory', getAllOrders)

export default router;