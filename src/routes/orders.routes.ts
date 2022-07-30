import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const router = Router();

const orderController = new OrdersController();

router.get('/', orderController.getAll);

export default router;