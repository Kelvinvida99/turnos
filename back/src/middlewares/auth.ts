import { NextFunction, Request, Response } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  console.log(token)
  if (token !== "autentificacion") {
    res.status(400).json({
      message: "No tienes permiso para acceder"
    });

    return
  }

  next()
};

export default auth;
