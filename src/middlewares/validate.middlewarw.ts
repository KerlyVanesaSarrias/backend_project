import { ObjectSchema } from "yup";
import { NextFunction, Request, Response } from "express";
import { ValidationError } from "yup";

export const validate = <T extends object>(shema: ObjectSchema<T>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await shema.validate(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          errors: error.errors
        });
        return;
      }

      res.status(500).json({
        message: "error in validate middleware",
      });
    }
  };
};
