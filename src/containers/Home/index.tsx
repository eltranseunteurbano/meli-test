import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import ProductList from '../../components/ProductList';
import useProductList from '../../hooks/useProductList';

const Home: React.FC = () => {
  const [ searchParams ] = useSearchParams();
  const { getProductList } = useProductList();

  const { data } = getProductList(searchParams.get('search') as string);

  const categories = [
    'Electrónica, Audio y Video',
    'iPod',
    'Reproductores',
    'iPod touch',
    '32GB',
  ];

  return (
    <section className="main-page home">
      <Breadcrumb
        categories={categories}
        className="main-breadcrumb"
      />
      <ProductList productList={data.slice(0, 4) || []} />
    </section>
  );
};

export default Home;
