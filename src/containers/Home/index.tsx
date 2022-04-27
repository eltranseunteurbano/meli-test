import Breadcrumb from "../../components/Breadcrumb"
import ProductItem from "../../types/ProductItem";
import ProductList from "../../components/ProductList";

const Home = () => {

  const categories = [
    'Electrónica, Audio y Video',
    'iPod',
    'Reproductores',
    'iPod touch',
    '32GB'
  ];

  const items: ProductItem[] = [
    {
      id: 'asd',
      value: 1980,
      freeShipping: true,
      description: 'Apple Ipod touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
      city: 'Capital Federal',
      img: ''
    },
    {
      id: 'dsa',
      value: 1980,
      freeShipping: true,
      description: 'Apple Ipod touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
      city: 'Capital Federal',
      img: ''
    },
    {
      id: 'sda',
      value: 1980,
      freeShipping: true,
      description: 'Apple Ipod touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
      city: 'Capital Federal',
      img: ''
    },
    {
      id: 'sad',
      value: 1980,
      freeShipping: true,
      description: 'Apple Ipod touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
      city: 'Capital Federal',
      img: ''
    }
  ];

  return (
    <section className="home">
      <article className="home-content">
        <Breadcrumb
          categories={categories}
          className="home-breadcrumb"
        />
        <ProductList
          productList={items}
          className="home-productList"
        />
      </article>
    </section>
  )
}

export default Home