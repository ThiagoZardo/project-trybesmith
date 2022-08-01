import connection from '../models/connection';
import LoginModel from '../models/login.model';
import Login from '../interfaces/login.interface';
import jwt from '../utils/jwt';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(user: Login): Promise<string | boolean> {
    const login = await this.model.login(user);
    if (login.length === 0) return false;
    const newUser = Object.values(login[0]);
    const [id, username, classe, level] = newUser;
    const newUserCreated = {
      id,
      username,
      classe,
      level,
    };
    const token = await jwt.generateToken(newUserCreated);
    return token;
  }
}

export default LoginService;
