import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders.service';

class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getAll = async (req: Request, res: Response) => {
    const order = await this.ordersService.getAll();
    res.status(StatusCodes.OK).json(order);
  };
}

export default OrdersController;
