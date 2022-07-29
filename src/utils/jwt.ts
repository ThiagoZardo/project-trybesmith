import jwt, { SignOptions } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const JWT_SECRET = '123456';

const verifyToken = (token: string) => {
  const validate = jwt.verify(token, JWT_SECRET);
  return validate;
};

const generateToken = async (user: User) => {
  const jwtConfig: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '12h',
  };

  const token = jwt.sign({ user }, JWT_SECRET, jwtConfig);
  return token;
};

export default {
  verifyToken,
  generateToken,
};
