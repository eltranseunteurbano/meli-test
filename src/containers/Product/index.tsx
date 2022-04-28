import React from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import useProduct from './useProduct';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import WhiteCard from '../../components/WhiteCard';
import ThousandSeparator from '../../utils/thousandSeparator';
import Pluralize from '../../utils/pluralize';
import ErrorState from './ErrorState';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { getProduct } = useProduct();
  const { data: { item }, isError, isLoading } = getProduct(`${id}`);

  const categories = [
    'Electrónica, Audio y Video',
    'iPod',
    'Reproductores',
    'iPod touch',
    '32GB',
  ];

  if (isError) return <ErrorState />;

  const ButtonBuy = isLoading ? <div className="product-buy-skeleton skeleton-animation" /> : (
    <Button
      isFullwidth
      onClick={
      () => console.log(id)
}
      className="product-buy"
    >
      Comprar
    </Button>
  );

  return (
    <section className="main-page product">
      <Breadcrumb
        categories={categories}
        className="main-breadcrumb"
      />

      <WhiteCard className="product-content">
        <div className={
          cn(
            'product-image',
            isLoading && 'product-image-skeleton skeleton-animation',
          )
}
        >
          <img
            src={item.picture.url}
            alt={item.title}
            width={item.picture.width}
            height={item.picture.height}
          />
        </div>
        <article className="product-info">
          <p className={
            cn('product-info-soldUnits', isLoading && 'product-info-soldUnits-skeleton skeleton-animation')
}
          >
            <span className="product-info-condition">
              {item.condition}
            </span>
            {item.sold_quantity > 0 && `- ${item.sold_quantity} vendido${Pluralize(item.sold_quantity)}`}
          </p>
          <h1 className={
            cn('product-info-title', isLoading && 'product-info-title-skeleton skeleton-animation')
}
          >
            {item.title}
          </h1>
          <p className={cn('product-info-value money', isLoading && 'product-info-value-skeleton skeleton-animation')}>
            {ThousandSeparator(item.price.amount)}
            <sup>{item.price.decimals}</sup>
          </p>
          {ButtonBuy}
        </article>
        <article className="product-description">
          <h2 className={
            cn(
              'product-description-title',
              isLoading && 'product-description-title-skeleton skeleton-animation',
            )
}
          >
            Descripción del producto
          </h2>
          <p className={
            cn(
              'product-description-text',
              isLoading && 'product-description-text-skeleton skeleton-animation',
            )
}
          >
            {item.description}
          </p>
          {ButtonBuy}
        </article>
      </WhiteCard>
    </section>
  );
};

export default Product;
