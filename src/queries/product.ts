import axios, { AxiosResponse } from 'axios';

const API = 'https://api.mercadolibre.com';

type AxiosResponseType = Promise<AxiosResponse<unknown, unknown>>;

export const getProductQuery = async (id: string):AxiosResponseType => {
  const { data } = await axios.get(`${API}/items/${id}`);
  return data;
};

export const getProductDescriptionQuery = async (id: string):AxiosResponseType => {
  const { data } = await axios.get(`${API}/items/${id}/description`);
  return data;
};
