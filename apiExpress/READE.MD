# API GERENCIAMENTO DE USUARIOS 👥

## CONCEITOS

* Este código fornece uma API completa para a criação, leitura, atualização e exclusão de usuários (conhecida como CRUD). Ele utiliza o Express para criar as rotas HTTP e o Prisma para interagir com o banco de dados MongoDB. A API é capaz de lidar com requisições que enviam ou recebem dados em formato JSON, o que facilita a interação com aplicativos front-end ou outras aplicações externas.

## Importações e Configurações Iniciais
```bash
import { PrismaClient } from "@prisma/client";
import express from "express";
```

* O Prisma Client é importado para permitir a comunicação com o banco de dados MongoDB.
O Express é importado para criar o servidor e gerenciar as rotas HTTP.
* O Express é importado para criar o servidor e gerenciar as rotas HTTP.

```bash
const prisma = new PrismaClient();
const app = express();
const port = 3000;
```
* Aqui, é instanciado o PrismaClient em uma variável prisma, que será usada para executar consultas no banco de dados.
* app é uma instância do Express que será usada para configurar rotas e middlewares.
*A variável port define a porta onde o servidor será executado (neste caso, a porta 3000).

## Middleware para Manipulação de JSON

```bash
app.use(express.json());
```
* O app.use(express.json()) é um middleware que indica ao Express que as requisições que contenham dados em formato JSON devem ser automaticamente interpretadas e convertidas em objetos JavaScript.

## Rota POST: Criar um Usuário ⬅
```bash
app.post("/users", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).send("ok");
});
```
* A rota POST /users cria um novo usuário no banco de dados.
* Utilizando o método prisma.user.create, os dados recebidos no corpo da requisição (req.body) são armazenados no banco de dados. As informações esperadas são email, name e age.
* Após a criação do usuário, a API responde com o código de status 201 (Created) e a mensagem "ok".

## Rota GET: Listar Todos os Usuários ➡
```bash
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});
```
* A rota GET /users retorna todos os usuários cadastrados no banco de dados.
* O método prisma.user.findMany é usado para buscar todos os registros de usuários.
* A resposta inclui o código de status 200 (OK) e um array de objetos JSON contendo os dados dos usuários.

## Rota PUT: Atualizar um Usuário 📝
```bash
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});
```
* A rota PUT /users/:id atualiza os dados de um usuário específico
* O método prisma.user.update busca um usuário pelo id passado como parâmetro na URL (req.params.id), e atualiza seus dados com as informações recebidas no corpo da requisição (req.body).
* A resposta contém o código de status 201 (Created) e a mensagem "ok".

## Rota DELETE: Remover um Usuário ❌
```bash
app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Usuário removido com sucesso!" });
});
```
* A rota DELETE /users/:id remove um usuário do banco de dados.
* O método prisma.user.delete deleta o usuário correspondente ao id fornecido como parâmetro na URL.
* Após a exclusão, a API responde com o código de status 200 (OK) e uma mensagem de confirmação em formato JSON.

## Iniciando o Servidor
```bash
app.listen(port);
```
* A aplicação é iniciada na porta definida (neste caso, 3000) usando o método app.listen(port). A partir deste ponto, o servidor começa a escutar requisições HTTP nas rotas configuradas.

