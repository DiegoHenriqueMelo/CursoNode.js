// * IMPORTA AS FUNÇÕES DE STATUSCODE
import { PlayerModel } from "../models/playerModel";
import * as playerRepository from "../repositories/playerRepository";
import * as HttpResponse from "../utils/htpp.helper";

// * EXPORTA FUNÇÃO PARA PEGAR O PLAYER
export const getPlayerServices = async () => {
  // * DELCARA O DATA
  const data = await playerRepository.findAllPlayers(); //! PODERIA SER UM BD

  // * DECLARA A RESPOSTA COMO NULO
  let response = null;

  if (data) {
    // * SE DATA EXISTIR, CHAMA FUNÇÃO COM DATA DE PARAMENTRO
    response = await HttpResponse.ok(data);
  } else {
    // * SE DATA Ñ EXISTIR, CHAMA FUNÇÃO
    response = await HttpResponse.noContent();
  }
  return response;
};

export const getPlayerByIdServeces = async (id: number) => {
  const data = await playerRepository.findPlayerById(id);

  let response = null;

  if (data) {
    response = HttpResponse.ok(data);
  } else {
    response = HttpResponse.noContent();
  }

  return response;
};

export const createPlayerServices = async (player: PlayerModel) => {
  if (Object.keys(player).length != 0) {
    console.log(player)
  } else {
    console.log("badRequest")
    return HttpResponse.badRequest();
  }
};
