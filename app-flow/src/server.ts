// IMPORTOU TUDO DA BIBLIOTECA HTTP
import * as http from "http";
// IMPORTOU UMA FUNÇÃO
import { getFilterEpisodios, getListEpisodios } from "./controller/podcast-controller";
import { Routes } from "./routes/routes";
// DECLAROU UMA VARIAVEL QUE CRIA UM SERVIDOR
const server = http.createServer(
  // SERVIDOR É UMA FUNÇÃO ASSINCRONA QUE RECEBE DOIS PARAMETROS(REQUIRE, RESPONSE)
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    // VERIFICA SE O METODO DO REQUIRE É GET

    const [baseURL, queryString] = req.url?.split("?") ?? [""]


    console.log(baseURL)
    console.log(queryString)


     if(req.method === "GET" && baseURL === Routes.LIST) {
        // EXECUTA A FUNCAO NÃO ASSINCRONA COM PARAMETROS DE REQUIRE E RESPONSE
        await getListEpisodios(req, res); 
    }

    if(req.method === "GET" && baseURL === Routes.EPISODE){
      await getFilterEpisodios(req, res)
    }
  }
);
// DECLARA PORTA DO SERVIDOR
const port = process.env.PORT
// SE A PORTA ESTIVER CORRETA, EXIBE UMA MENSAGEM
server.listen(port, () => {
  console.log(`Server logado na porta ${port}`);
})
