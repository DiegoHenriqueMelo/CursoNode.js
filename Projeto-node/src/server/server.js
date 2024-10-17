import express from "express";
import { data } from "../data/dataPersonagens.js";
import * as Routes from "../routes/routes.js";
import { HttpStatusCode } from "../util/statusCode.js";

export const setServerOn = () => {
  const app = express();
  const port = 3000;
  const create = Routes.routeCreate;
  const list = Routes.routeList;
  const listByID = Routes.routeListById;
  const update = Routes.routeUpdate;
  const remove = Routes.routeRemove;

  app.use(express.json());

  app.post(create, (req, res) => {
    data.push(req.body);

    console.log(data);

    res.status(HttpStatusCode.OK).json(data);
  });

  app.get(list, (req, res) => {
    res.status(HttpStatusCode.CREATED).json(data);
  });

  app.get(listByID, (req, res) => {
    const { index } = req.params;
    res.status(HttpStatusCode.OK).json(data)
  });

  app.put(update, (req, res) => {
    const { index } = req.params;
    const { curso } = req.body;

    data[index] = curso;
    res.json(data);
  });

  app.delete(remove, (req, res) => {
    const { index } = req.params;
    data.splice(index, 1);

    res.status(HttpStatusCode.OK).json(data);
  });

  app.listen(port);
};
