// * IMPORTA AS FUNÇÕES DE STATUSCODE
import * as playerRepository from "../repositories/playerRepository";
import { noContent, ok } from "../utils/htpp.helper";

// * EXPORTA FUNÇÃO PARA PEGAR O PLAYER
export const getPlayerServices = async () => {
  // * DELCARA O DATA
  const data = await playerRepository.findAllPlayers(); //! PODERIA SER UM BD

  // * DECLARA A RESPOSTA COMO NULO
  let response = null;

  if (data) {
    // * SE DATA EXISTIR, CHAMA FUNÇÃO COM DATA DE PARAMENTRO
    response = await ok(data);
} else {
      // * SE DATA Ñ EXISTIR, CHAMA FUNÇÃO
    response = await noContent();
  }
  return response;
};
