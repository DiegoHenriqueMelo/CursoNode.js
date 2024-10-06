import express, { json, Request, Response } from "express";
import { getPlayer } from "./controllers/players-controller";
import router from "./routes/routes";

// * DECLARANDO CONSTANTES
const app = express(); //*DECLARANDO A API

export function createApp() {
  app.use(json()); //* USANDO JSON PARA SE COUMINDAR

  // * CRIOU A API COM REQUES E RESPONSE RETORNANDO STATUS E UM OBJ
  app.use("/api", router);

  return app;
}
