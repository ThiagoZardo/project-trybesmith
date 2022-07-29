import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();

const productController = new ProductsController();

router.post('/products', productController.create);

export default router;
