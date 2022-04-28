import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from './useProduct';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import WhiteCard from '../../components/WhiteCard';
import ThousandSeparator from '../../utils/thousandSeparator';
import Pluralize from '../../utils/pluralize';

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

  const ButtonBuy = <Button isFullwidth onClick={() => console.log(id)} className="product-buy">Comprar</Button>;

  return (
    <section className="main-page product">
      <Breadcrumb
        categories={categories}
        className="main-breadcrumb"
      />

      <WhiteCard className="product-content">
        <div className="product-image">
          <img
            src={item.picture.url}
            alt={item.title}
            width={item.picture.width}
            height={item.picture.height}
          />
        </div>
        <article className="product-info">
          <p className="product-info-soldUnits">
            <span className="product-info-condition">
              {item.condition}
            </span>
            {' '}- {item.sold_quantity} vendido{Pluralize(item.sold_quantity)}
          </p> { /* Pluralize */}
          <h1 className="product-info-title">{item.title}</h1>
          <p className="product-info-value money">
            {ThousandSeparator(item.price.amount)}
            <sup>{item.price.decimals}</sup>
          </p>
          {ButtonBuy}
        </article>
        <article className="product-description">
          <h2 className="product-description-title">
            Descripción del producto
          </h2>
          <p className="product-description-text">
            {item.description}
          </p>
          {ButtonBuy}
        </article>
      </WhiteCard>
    </section>
  );
};

export default Product;
