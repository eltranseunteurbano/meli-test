import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import WhiteCard from "../../components/WhiteCard";
import thousanSeparator from "../../utils/thousandSeparator";

const Product = () => {
  const { id } = useParams();

  const categories = [
    'Electrónica, Audio y Video',
    'iPod',
    'Reproductores',
    'iPod touch',
    '32GB'
  ];

  const ButtonBuy = <Button isFullwidth onClick={() => console.log('a')} className="product-buy">Comprar</Button>

  return (
    <section className="main-page product">
      <Breadcrumb
        categories={categories}
        className="main-breadcrumb"
      />

      <WhiteCard className="product-content">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_607789-MLA46552310113_062021-O.webp"
          alt="producto" width={680} height={680}
          className='product-image'
        />
        <article className="product-info">
          <p className="product-info-soldUnits">Nuevo - 234 vendidos</p>
          <h1 className="product-info-title">Deco Reverse Sombrero Oxford</h1>
          <p className="product-info-value money">{thousanSeparator(1980)}<sup>00</sup></p>
          {ButtonBuy}
        </article>
        <article className="product-description">
          <h2 className="product-description-title">Descripción del producto</h2>
          <p className="product-description-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem nulla atque quasi nisi harum, ut reprehenderit commodi mollitia, rerum impedit aperiam porro debitis quae rem, adipisci omnis provident minima?</p>
          {ButtonBuy}
        </article>
      </WhiteCard>
    </section>
  )
}

export default Product;