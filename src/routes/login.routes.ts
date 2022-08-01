import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginValidate from '../middlewares/login.middleware';

const router = Router();

const loginController = new LoginController();

router.post('/', loginValidate, loginController.login);

export default router;
