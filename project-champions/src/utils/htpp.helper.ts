import { HttpResponse } from "../models/httpsResponseModel";

// * EXPORTA A FUNÇÃO SE O DATA EXISTIR
export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    // * RETORNA STATUS CODE
    statusCode: 200,
    body: data,
  };
};

// * EXPORTA A FUNÇÃO SE O DATA Ñ EXISTIR
export const noContent = async (): Promise<HttpResponse> => {
  return {
    // * RETORNA STATUS CODE
    statusCode: 204,
    body: null,
  };
};

export const badRequest = async(): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null
  }
}
