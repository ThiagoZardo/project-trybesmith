import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import productMiddleware from '../middlewares/product.middleware';

const router = Router();

const productController = new ProductsController();

router.post(
  '/',
  productMiddleware.productValidateName,
  productMiddleware.productValidateAmount,
  productController.create,
);

router.get('/', productController.getAll);

export default router;
