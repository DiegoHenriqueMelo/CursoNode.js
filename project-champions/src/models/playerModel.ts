// * CRIANDO INTERFACE PARA RETORNAR O PLAYER

export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: {
    Overall: number;
    Pace: number;
    Shooting: number;
    Passing: number;
    Dribbling: number;
    Defending: number;
    Physical: number;
  };
}
