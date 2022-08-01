import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  /* A função MySQL JSON_ ARRAYAGG() utilizada na classe getAll() agrega o conteúdo da coluna especificada 
    (ou, dada expressão) como um único array. 
    Se as colunas especificadas não tiverem linhas, esta função retornará NULL
    https://www.tutorialspoint.com/mysql/mysql_aggregate_functions_json_arraygg.htm */

  public async getAll(): Promise<Order[]> {
    const [result] = await this.connection.execute(
      `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
      FROM Trybesmith.Orders AS O
      INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId
      GROUP BY Trybesmith.O.id 
      ORDER BY O.userId`,
    );
    return result as Order[];
  }
}