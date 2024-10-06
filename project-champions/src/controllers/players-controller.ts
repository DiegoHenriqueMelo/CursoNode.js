import { Request, Response } from "express";
import { getPlayerServices } from "../services/playerServices";

//* CONTROLEER PARA CONFIGURAR COMO VAI RETORNAR NA API
export const getPlayer = async (req: Request, res: Response) => {
  // * DECLARA A VARIAVEL QUE RECEBE A FUNÇÃO
  const httpResponse = await getPlayerServices();

  // * RETORNA O STATUSCODE E BODY
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
