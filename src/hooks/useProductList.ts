/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from 'react-query';
import { getProductListQuery } from '../queries/productList';
import { ProductItem, ProductItemQuery } from '../types/ProductItem';
import getCleanProduct from '../utils/getCleanProduct';

type ProductListQuery = Omit<ProductItemQuery, 'data'> & { data: ProductItem[] };

interface UseProductListReturn {
  getProductList: (search: string) => ProductListQuery;
}

const useProductList = (): UseProductListReturn => {
  const reactQuery = useQuery;

  const getProductList = (search: string): ProductListQuery => {
    const {
      data,
      error,
      isError,
      isLoading,
    } = reactQuery([ 'productList', search ], () => getProductListQuery(search));

    const filteredData = (data?.results || []).map((item:any) => getCleanProduct(item));

    return {
      error,
      isError,
      isLoading,
      data: filteredData,
    };
  };

  return {
    getProductList,
  };
};

export default useProductList;
