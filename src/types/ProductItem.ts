type ProductItem = {
  author: {
    name: string;
    lastname: string;
  },
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    },
    picture: {
      url: string;
      width: number;
      height: number;
    },
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description?: string;
  }
};

type ProductItemQuery = {
  data: ProductItem;
  error: unknown;
  isError: boolean;
  isLoading: boolean;
};

export type { ProductItem, ProductItemQuery };
