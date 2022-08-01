import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import { Order, OrderRequestCreate, OrderCreate } from '../interfaces/orders.interface';

class OrdersService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const order = await this.model.getAll();
    return order;
  }

  public async create(productsIds:number[], id: number): Promise<OrderCreate | false> {
    const newRequest = await this.model.create(productsIds, id);
    return newRequest;
  }
}

export default OrdersService;
