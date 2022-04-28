import axios from 'axios';

const API = 'https://api.mercadolibre.com';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AxiosResponseType = Promise<any>;

export const getProductQuery = async (id: string):AxiosResponseType => {
  const { data } = await axios.get(`${API}/items/${id}`);
  return data;
};

export const getProductDescriptionQuery = async (id: string):AxiosResponseType => {
  const { data } = await axios.get(`${API}/items/${id}/description`);
  return data;
};
