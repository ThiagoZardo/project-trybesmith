import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
} from '../middlewares/user.middleware';

const router = Router();

const userController = new UsersController();

router.post(
  '/',
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
  userController.create,
);

export default router;