import React from 'react';
import cn from 'classnames';
import { ProductItem } from '../../types/ProductItem';
import ProductItemCard from '../ProductItemCard';
import WhiteCard from '../WhiteCard';

interface ProductListProps {
  productList: ProductItem[];
  className?: string;
  isLoading?: boolean;
}

const ProductList: React.FC<ProductListProps> = (props) => {
  const { productList, className, isLoading } = props;

  return (
    <WhiteCard className={cn(className, 'ProductList')}>
      {productList.map(({ item, author }, index) => (
        <ProductItemCard
          key={item.id}
          lastCard={index === productList.length - 1}
          item={item}
          author={author}
          isLoading={isLoading}
        />
      ))}
    </WhiteCard>
  );
};

export default ProductList;
