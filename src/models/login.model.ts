import { Pool } from 'mysql2/promise';
import Login from '../interfaces/login.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login(user: Login): Promise<Login[]> {
    const { username, password } = user;
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    return result as Login[];
  }
}