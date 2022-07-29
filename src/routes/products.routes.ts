import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();

const productController = new ProductsController();

router.post('/products', productController.create);
router.get('/products', productController.getAll);

export default router;
