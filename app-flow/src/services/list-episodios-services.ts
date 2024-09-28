import { repoPodcast } from "../repositories/podcast-repository";

// DELCARA FUNÇÃO PARA EXIBIR EPISÓDIOS
export const servicesListEpisodios = async () => {
  // LSITA DE EPISÓDIOS
  const data = await repoPodcast();
  //   RETORNA A LISTA
  return data;
};
