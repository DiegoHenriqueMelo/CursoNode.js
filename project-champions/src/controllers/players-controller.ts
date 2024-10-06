import { Request, Response } from "express";
import * as PlayerServices from "../services/playerServices";
import { noContent } from "../utils/htpp.helper";

//* CONTROLEER PARA CONFIGURAR COMO VAI RETORNAR NA API
export const getPlayer = async (req: Request, res: Response) => {
  // * DECLARA A VARIAVEL QUE RECEBE A FUNÇÃO
  const httpResponse = await PlayerServices.getPlayerServices();

  // * RETORNA O STATUSCODE E BODY
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await PlayerServices.getPlayerByIdServeces(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await PlayerServices.createPlayerServices(bodyValue);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }else{
    const response = await noContent()

    res.status(response.statusCode).json(response.body)
  }
};
