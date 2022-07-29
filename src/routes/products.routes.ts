import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();

const productController = new ProductsController();

router.post('/', productController.create);
router.get('/', productController.getAll);

export default router;
