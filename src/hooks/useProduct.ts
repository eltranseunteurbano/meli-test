import { useQuery } from 'react-query';
import { getProductDescriptionQuery, getProductQuery } from '../queries/product';
import { ProductItemQuery } from '../types/ProductItem';
import getCleanProduct from '../utils/getCleanProduct';

interface UseProductReturn {
  getProduct: (productId: string) => ProductItemQuery;
}

const useProduct = (): UseProductReturn => {
  const reactQuery = useQuery;

  const getProduct = (productId: string): ProductItemQuery => {
    const {
      data,
      error: productError,
      isError: isProductError,
      isLoading: isProductLoading,
    } = reactQuery([ 'productKey', productId ], () => getProductQuery(productId));

    const {
      data: descriptionData,
      error: descriptionError,
      isError: isDescriptionError,
      isLoading: isDescriptionLoading,
    } = reactQuery([ 'productDescriptionKey', productId ], () => getProductDescriptionQuery(productId));
    const productData = getCleanProduct(data, false);

    return {
      error: productError || descriptionError,
      isError: isProductError || isDescriptionError,
      isLoading: isProductLoading || isDescriptionLoading,
      data: {
        ...productData,
        item: {
          ...productData.item,
          description: descriptionData?.plain_text || '',
        },
      },
    };
  };

  return {
    getProduct,
  };
};

export default useProduct;
