import connection from '../models/connection';
import UsersModel from '../models/users.model';
import { User } from '../interfaces/user.interface';
import jwt from '../utils/jwt';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: User): Promise<string> {
    const userCreated = await this.model.create(user);
    const { id, username, classe, level } = userCreated;
    const newUser = { 
      id,
      username,
      classe,
      level,
    };
    const token = await jwt.generateToken(newUser);
    return token;
  }
}

export default UsersService;
