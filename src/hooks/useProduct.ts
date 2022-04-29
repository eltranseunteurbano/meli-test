import { useQuery } from 'react-query';
import { getProductDescriptionQuery, getProductQuery } from '../queries/product';
import { ProductItemQuery } from '../types/ProductItem';

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

    return {
      error: productError || descriptionError,
      isError: isProductError || isDescriptionError,
      isLoading: isProductLoading || isDescriptionLoading,
      data: {
        author: {
          name: '',
          lastname: '',
        },
        item: {
          id: data?.id || productId,
          title: data?.title || '',
          price: {
            currency: data?.currency_id || '',
            amount: data?.price || 0,
            decimals: 0,
          },
          picture: {
            width: data?.pictures[0]?.max_size.split('x')[0] || 0,
            height: data?.pictures[0]?.max_size.split('x')[1] || 0,
            url: data?.pictures[0]?.url || '',
          },
          condition: data?.condition || '',
          free_shipping: data?.shipping?.free_shipping || false,
          sold_quantity: data?.sold_quantity || 0,
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
