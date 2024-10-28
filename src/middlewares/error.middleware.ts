import { NextFunction, Request, Response } from "express";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction ) => {
    console.error('Global error handler: ', error)
    res.status(500).json({ message: error.message || 'internal server error' })
}