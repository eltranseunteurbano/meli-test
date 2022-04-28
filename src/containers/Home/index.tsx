import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { ProductItem } from '../../types/ProductItem';
import ProductList from '../../components/ProductList';

const Home: React.FC = () => {
  const categories = [
    'Electrónica, Audio y Video',
    'iPod',
    'Reproductores',
    'iPod touch',
    '32GB',
  ];

  const items: ProductItem[] = [];

  return (
    <section className="main-page home">
      <Breadcrumb
        categories={categories}
        className="main-breadcrumb"
      />
      <ProductList productList={items} />
    </section>
  );
};

export default Home;
