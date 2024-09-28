// IMPORTANDO BIBLIOTEXAS E PROMISSE(INTERFACE POSCAST(MODELO PADRÃO))
import fs from "fs";
import path from "path";
import { PodcastModel } from "../modules/podcast-modules";


// DECLARA VARIAVEL PARA PEGAR DIRETORIO
const pathData = path.join(__dirname, "../repositories/podcast.json");

// EXPORTA A FUNÇÃO ASSINCRONA QUE É UMA PROMISE
export const repoPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    // LE O ARQUIVO PELO CAMINHO DO DIRETORIO
  const rawData = fs.readFileSync(pathData, "utf-8");
  // TRANSFORMA EM JSON
  let jsonFile = JSON.parse(rawData);

// SE podcastName(PARAMETRO) EXISTIR, FAÇA ALGO
if(podcastName){
  // ALTERE O JSONFILE PARA UM FILTER DELE MESMO, PARA CASA PODCAST QUE SEGUIR O MODELO (PODCASTMODEL), RECEBA O PODCAST QUE TENHA O MESMO NOME
  jsonFile = jsonFile.filter((podcast: PodcastModel)=>podcast.podcastName === podcastName)
}

//   RETORNA O JSON
  return jsonFile;
};
