import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [result] = await this.connection.execute(
      `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
      FROM Trybesmith.Orders AS O
      INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId
      GROUP BY Trybesmith.O.id 
      ORDER BY O.userId`,
    );
    console.log(result);
    return result as Order[];
  }
}