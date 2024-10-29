import moment from "moment";
import jwt from "jwt-simple";
import { Request, Response, NextFunction } from "express";
import { User } from "../interfaces/user.interface";

export const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.status(403).send({
      status: "error",
      message: "No token provided",
    });
    return;
  }
  const token = req.headers.authorization
    .replace(/['"]+/g, "")
    .replace("Bearer ", "");

  try {
    const payload = jwt.decode(token, process.env.SECRET_KEY as string);

    if (payload.exp <= moment().unix()) {
      res.status(401).send({
        status: "error",
        message: "Token has expired",
      });
      return;
    }

    console.log('payload', payload)

    res.locals.user = payload as User;
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: "Invalid token",
    });
    return;
  }

  next();
};
