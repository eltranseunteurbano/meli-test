import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import ProductList from '../../components/ProductList';
import useProductList from '../../hooks/useProductList';
import EmptyState from './EmptyState';

const Home: React.FC = () => {
  const [ searchParams ] = useSearchParams();
  const { getProductList } = useProductList();

  const { data, isLoading } = getProductList(searchParams.get('search') as string);

  const categories = [
    'Electrónica, Audio y Video',
    'iPod',
    'Reproductores',
    'iPod touch',
    '32GB',
  ];

  return (
    <section className="main-page home">
      {!!searchParams.get('search')
        ? (
          <>
            <Breadcrumb
              categories={categories}
              className="main-breadcrumb"
            />
            <ProductList
              productList={data.slice(0, 4) || []}
              isLoading={isLoading}
            />
          </>
        ) : <EmptyState />
      }
    </section>
  );
};

export default Home;
