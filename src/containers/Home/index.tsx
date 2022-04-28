import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ProductItem from '../../types/ProductItem';
import ProductList from '../../components/ProductList';

const Home: React.FC = () => {
  const categories = [
    'Electrónica, Audio y Video',
    'iPod',
    'Reproductores',
    'iPod touch',
    '32GB',
  ];

  const items: ProductItem[] = [
    {
      id: 'asd',
      value: 1980,
      freeShipping: true,
      description: 'Apple Ipod touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
      city: 'Capital Federal',
      img: '',
    },
    {
      id: 'dsa',
      value: 1980,
      freeShipping: true,
      description: 'Apple Ipod touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
      city: 'Capital Federal',
      img: '',
    },
    {
      id: 'sda',
      value: 1980,
      freeShipping: true,
      description: 'Apple Ipod touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
      city: 'Capital Federal',
      img: '',
    },
    {
      id: 'sad',
      value: 1980,
      freeShipping: true,
      description: 'Apple Ipod touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
      city: 'Capital Federal',
      img: '',
    },
  ];

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
