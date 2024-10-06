import { PlayerModel } from "../models/playerModel";

// * CRIANDO UM BD EM MEMÓRIA DOS PLAYERS
const dataBase: PlayerModel[] = [
  {
    id: 1,
    name: "Messi",
  },
  {
    id: 2,
    name: "Ronaldo",
  },
  {
    id: 3,
    name: "Neymar Jr",
  },
  {
    id: 4,
    name: "Mbappe",
  },
];

// * EXPORTANDO FUNÇÃO PARA PEGAR TODOS OS PLAYERS
export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return dataBase;
};

// * EXPORTANDO FUNÇÃO PARA PEGAR PLAYER PELO ID
export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return dataBase.find((player) => player.id === id);
};
