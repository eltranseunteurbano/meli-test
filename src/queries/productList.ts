import axios from 'axios';

const API = 'https://api.mercadolibre.com';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AxiosResponseType = Promise<any>;

export const getProductListQuery = async (search:string):AxiosResponseType => {
  const { data } = await axios.get(`${API}/sites/MLA/search?q=${search}`);
  return data;
};
