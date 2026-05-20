import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            res.status(401).json({
                message: "No token provided",
            });
            return;
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            res.status(401).json({
                message: "Token not found",
            });
            return;
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        );

        (req as any).user = decoded;

        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid token",
        });
    }
};