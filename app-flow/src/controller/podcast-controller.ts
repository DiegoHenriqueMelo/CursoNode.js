// IMPORTA O REQUEST E RESPONSE DO HTTP
import { IncomingMessage, ServerResponse } from "http";
// IMPORTA A FUNCAO
import { servicesListEpisodios } from "../services/list-episodios-services";
import { servicesFilterEpisodios } from "../services/filter-episodios-services";
import { Routes } from "../routes/routes";

// EXPORTA A FUNCAO(API)
export const getListEpisodios = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  // DECLARA A VARIAVEL PARTINDO DE UMA FUNCAO NÃO ASSINCRONA
  const content = await servicesListEpisodios();
  // LE A HEAD DA API, DELCARANDO STATUSCODE 200(OK)
  response.writeHead(200, {
    // O TIPO DE CONTEUDO É JSON(PADRÃO DA API)
    "Content-Type": "application/json",
  });
  // ENVIA A RESPOSTA CONTENT(VARIAVEL)
  response.end(JSON.stringify(content));
};

export const getFilterEpisodios = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await servicesFilterEpisodios(req.url);

  res.writeHead(Routes.STATUSCODE, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
