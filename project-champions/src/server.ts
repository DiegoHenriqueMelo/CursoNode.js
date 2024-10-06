//* IMPORTANDO O EXPRESS PARA FACILITAR A CRIAÇÃO DA API
import express, { json, Request, Response } from "express";

// * IMPORTANDO FUNÇÃO PARA CONFIGURAR A API
import { createApp } from "./app";

// * ATRIBUIU A FUNÇÃO EXPORTADA PARA A CONSTANTE
const app = createApp();

const PORT = process.env.PORT; //* DECLAROU A PORTA

// * TESTANDO A API PELO LOCALHOST
app.listen(PORT, () => {
  console.log(`🔥 SERVER RUNNING AT PORT: http://localhost:${PORT} `);
});
