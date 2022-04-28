import { Link } from 'react-router-dom';
import cn from 'classnames';
import ProductItem from '../../types/ProductItem';
import thousanSeparator from '../../utils/thousandSeparator';

interface ProductItemCardProps extends ProductItem {
  lastCard?: boolean;
}

const ProductItemCard: React.FC<ProductItemCardProps> = (props) => {
  const { lastCard, freeShipping, description, value, city, id } = props;
  return (
    <Link
      to={`/items/${id}`}
      className={cn(
        "productItemCard",
        lastCard && 'productItemCard-last'
      )}
    >
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_607789-MLA46552310113_062021-O.webp"
        alt="producto" width={180} height={180}
        className='productItemCard-image'
      />
      <div className='productItemCard-data'>
        <div className='productItemCard-price'>
          <span className='productItemCard-price-value money'>{thousanSeparator(value, '.')}</span>
          {freeShipping && <img
            src='./assets/icons/ic_shipping.png'
            alt="Free shipping icon"
            className='productItemCard-price-shipping'
            width={16} height={16}
          />}
        </div>

        <p className='productItemCard-description'>{description}</p>
      </div>
      <p className='productItemCard-location'>{city}</p>
    </Link>
  )
}

export default ProductItemCard;