import { PrismaClient } from "@prisma/client";
import express from "express";

// ! PRIMA É UMA BIBLIOTECA PARA LIDAR COM BANCO DE DADOS MOGNODB, DECLARANDO ELA COMO VÁRIAVEL PARA SER MAIS FACIL DE USAR
const prisma = new PrismaClient();

// ! DECLARAMOS APP PARA USAR O EXPRESS COMO FUNÇÃO PARA CRIAR NOSSO SERVIDOR
const app = express();
const port = 3000;

// ! APP.USE SERVE PARA FALAR AO EXPRESS QUE IRÁ LIDAR COM INFORMAÇÕES EM JSON
app.use(express.json());

// ! FUNÇÃO POST HTTP PARA CRIAR/POSTAR UM NOVO USUARIO
app.post("/users", async (req, res) => {
  await prisma.user.create({
    // ! DATA É UM OBJETO PRISMA PARA MOSTRAR A INTERFACE QUE VAI SER ADICIONADO
    data: {
      // ! PEGA AS INFORMAÇÕES DO BODY DENTRO DAS REQUEST PELO SEU NOME E ATRIBUI AO BD
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  // ! DECLARA O STATUS E A MENSAGEM CONFIRMANDO QUE O METODO POST FOI REALIZADO
  res.status(201).send("ok");
});

// ! FUNÇÃO GET HTTP SENVE PARA LISTAR TODOS OS DADOS DO BD
app.get("/users", async (req, res) => {
  // ! FUNDMANY FOI DECLARADO PARA USERS, E ELA SERVE PARA LISTAR TODOS OS DADOS DO BANCO
  const users = await prisma.user.findMany();

  // ! DECLARA O STATUS E A MENSAGEM EM JSON COM OS DADOS DO GET CONFIRMANDO QUE O METODO POST FOI REALIZADO
  res.status(200).json(users);
});

// ! FUNÇÃO PUT HTTP SERVE PARA MUDAR OS DADOS DE ALGUM USAUARIO DE BD
app.put("/users/:id", async (req, res) => {
  // ! FUNÇÃO UPDATE SERVE PARA FAZER UMA ATUALIZAAÇÃO
  await prisma.user.update({
    // ! WHERE SERVE PARA MOSTRAR COMOM VAI IDENTIFICAR O USUARIO QUE SERÁ ALTERADO
    where: {
      id: req.params.id,
    },

    // ! PEGA AS INFORMAÇÕES DO BODY DENTRO DAS REQUEST PELO SEU NOME E ATRIBUI AO BD
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  // ! DECLARA O STATUS E A MENSAGEM CONFIRMANDO QUE O METODO PUT FOI REALIZADO
  res.status(201).send("ok");
});

// ! FUNÇÃO DELETE HTTP SERVE PARA DELETAR UM USUARIO DO BANCO
app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({
    // ! WHERE SERVE PARA MOSTRAR COMOM VAI IDENTIFICAR O USUARIO QUE SERÁ ALTERADO
    where: {
      id: req.params.id,
    },

    // ! NÃO TEM DATA{} PORQUE ELE NÃO VAI RECEBER NENHUM DADO A SER ADCIONADO
  });

  // ! DECLARA O STATUS E A MENSAGEM EM JSON CONFIRMANDO QUE O METODO DELETE FOI REALIZADO
  res.status(200).json({ message: "Usuário removido com sucesso!" });
});

// ! INICIA O SERVIDOR COM MA PORTA DECLARADA
app.listen(port);
