import { NextFunction, Request, Response } from "express";
import  jsonwebtoken from 'jsonwebtoken'

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["auth"];
  let jwtPayload;
  let secret = process.env.JWT_SECRET;

  // Try to validate the token and get data
  try {
    if(secret === undefined) return res.status(401).send();
    jwtPayload = <any>jsonwebtoken.verify(token, secret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    // If token is not valid, respond with 401 (unauthorized)
    res.status(401).send();
    return;
  }

  // The token is valid for 1 hour
  // We want to send a new token on every request
  const { userId, username } = jwtPayload;
  const newToken = jsonwebtoken.sign({ userId, username }, secret, {
    expiresIn: "1h"
  });
  res.setHeader("token", newToken);

  // Call the next middleware or controller
  next();
};

export default checkJwt;