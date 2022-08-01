import { Request, Response, NextFunction } from 'express';
import verify from '../utils/jwt';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token === undefined) return res.status(401).json({ message: 'Token not found' });
  const tokenVerify = verify.verifyToken(token);
  
  if (tokenVerify === false) return res.status(401).json({ message: 'Invalid token' });
  /*
  Aqui a Kyssla me ajudou a entender como consigo guardar informações no res.locals 
  http://expressjs.com/pt-br/api.html#res.locals
  */
  res.locals.userId = tokenVerify;
  next();
};

export default validateToken;