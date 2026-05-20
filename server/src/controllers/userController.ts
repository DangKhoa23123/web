import { Request, Response } from "express";

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({
    message: "Profile fetched successfully",
    user: (req as any).user,
  });
};