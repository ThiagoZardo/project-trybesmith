import jwt, { SignOptions } from 'jsonwebtoken';
import { UserPasswordHiden } from '../interfaces/user.interface';

const JWT_SECRET = '123456';

const verifyToken = (token: string) => {
  try {
    const jwtConfig: SignOptions = {
      algorithm: 'HS256',
      expiresIn: '12h',
    };
    const validate = jwt.verify(token, JWT_SECRET, jwtConfig);
    
    return validate;
  } catch (error) {
    return false;
    console.log(error);
  }
};

const generateToken = async (user: UserPasswordHiden) => {
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
