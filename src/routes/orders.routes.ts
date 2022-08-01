import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import validateToken from '../middlewares/token.middleware';
import { productValidateIds } from '../middlewares/product.middleware';

const router = Router();

const orderController = new OrdersController();

router.get('/', orderController.getAll);
router.post(
  '/',
  validateToken,
  productValidateIds,
  orderController.create,
);

export default router;