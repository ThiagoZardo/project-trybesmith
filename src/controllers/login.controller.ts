import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/login.service';

class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.loginService.login(user);
    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }
    res.status(StatusCodes.OK).json({ token });
  };
}

export default LoginController;
