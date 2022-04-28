import React from 'react';
import cn from 'classnames';
import ProductItem from '../../types/ProductItem';
import ProductItemCard from '../ProductItemCard';
import WhiteCard from '../WhiteCard';

interface ProductListProps {
  productList: ProductItem[];
  className?: string;
}

const ProductList: React.FC<ProductListProps> = (props) => {
  const { productList, className } = props;

  return (
    <WhiteCard className={cn(className, 'ProductList')}>
      {productList.map(({ city, description, freeShipping, id, img, value }, index) => (
        <ProductItemCard
          key={id}
          lastCard={index === productList.length - 1}
          city={city}
          description={description}
          freeShipping={freeShipping}
          id={id}
          img={img}
          value={value}
        />
      ))}
    </WhiteCard>
  );
};

export default ProductList;
