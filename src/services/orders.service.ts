import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import { Order } from '../interfaces/orders.interface';

class OrdersService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const order = await this.model.getAll();
    console.log(order);
    return order;
  }
}

export default OrdersService;
