/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductItem } from '../types/ProductItem';

const getCleanProduct = (product: any, showSmallImage = true): ProductItem => {
  return {
    author: {
      name: 'Jaime',
      lastname: 'Burbano',
    },
    item: {
      id: product?.id || '',
      title: product?.title || '',
      price: {
        currency: product?.currency_id || '',
        amount: product?.price || 0,
        decimals: 0,
      },
      picture: {
        url: showSmallImage ? product?.thumbnail || '' : product?.pictures[0].url || '',
        width: showSmallImage ? 180 : parseInt(product?.pictures[0].size.split('x')[0], 10) || 180,
        height: showSmallImage ? 180 : parseInt(product?.pictures[0].size.split('x')[1], 10) || 180,
      },
      condition: product?.condition,
      free_shipping: product?.shipping?.free_shipping,
      sold_quantity: product?.sold_quantity,
    },
  };
};

export default getCleanProduct;
