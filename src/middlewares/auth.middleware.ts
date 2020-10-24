import { NextFunction, Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import HttpException from '../exceptions/HttpException';
import {
  DataStoredInToken,
  RequestWithUser,
} from '../interfaces/auth.interface';
import { userModel } from '../models/users.model';
import { JWT_SECRET } from '../config';

async function authMiddleware(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const token = req.header('x-auth-token');
  if (token) {
    const secret = JWT_SECRET;
    try {
      const verificationResponse = jwt.verify(
        token,
        secret
      ) as DataStoredInToken;
      const userId = verificationResponse.id;
      // const findUser = userModel.findOne((user) => user.id === userId);
      const findUser = await userModel.findOne({ where: { id: userId } });
      if (findUser) {
        req.user = findUser;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } catch (error) {
      next(new HttpException(401, 'Wrong authentication token'));
    }
  } else {
    next(new HttpException(404, 'Authentication token missing'));
  }
  // return next(new HttpException(404, 'something went wrong'));
}

export default authMiddleware;
