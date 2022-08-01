import express from 'express';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';
import OrdersRoutes from './routes/orders.routes';
import LoginRoutes from './routes/login.routes';
import loginValidate from './middlewares/login.middleware';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
app.use('/orders', OrdersRoutes);
app.use('/login', loginValidate, LoginRoutes);

export default app;
