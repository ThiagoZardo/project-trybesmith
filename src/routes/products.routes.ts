import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import { productValidateName, productValidateAmount } from '../middlewares/product.middleware';

const router = Router();

const productController = new ProductsController();

router.post(
  '/',
  productValidateName,
  productValidateAmount,
  productController.create,
);

router.get('/', productController.getAll);

export default router;
