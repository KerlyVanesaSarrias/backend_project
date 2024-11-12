import moment from "moment";
import jwt from "jwt-simple";
import { Request, Response, NextFunction } from "express";
import { AuthUser, User } from "../interfaces/user.interface";
import { ROLES } from "../constants";

type Roles = typeof ROLES[keyof typeof ROLES];

export const ensureAuth = (allowedRoles: Roles[]) => (req: Request, res: Response, next: NextFunction) => {
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

    const hasRole = (payload as AuthUser).roles.some((role) => allowedRoles.includes(role as Roles));

    console.log('roles: ', payload.roles, allowedRoles, hasRole)

    if (!hasRole) {
      res.status(403).send({
        status: "error",
        message: "Access denied: insufficient permissions",
      });
      return
    }

    res.locals.user = payload as AuthUser;
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: "Invalid token",
    });
    return;
  }
  next();
};