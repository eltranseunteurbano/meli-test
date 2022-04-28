import axios from 'axios';

const API = 'https://api.mercadolibre.com';

export const getProductQuery = async (id: string) => {
  const { data } = await axios.get(`${API}/items/${id}`);
  return data;
};

export const getProductDescriptionQuery = async (id: string) => {
  const { data } = await axios.get(`${API}/items/${id}/description`);
  return data;
};
