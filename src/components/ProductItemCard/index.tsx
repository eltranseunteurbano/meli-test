import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ProductItem } from '../../types/ProductItem';
import ThousanSeparator from '../../utils/thousandSeparator';

interface ProductItemCardProps extends ProductItem {
  lastCard?: boolean;
}

const ProductItemCard: React.FC<ProductItemCardProps> = (props) => {
  const {
    lastCard,
    item: { id, free_shipping: freeShiping, price, picture, title },
  } = props;

  return (
    <Link
      to={`/items/${id}`}
      className={cn(
        'productItemCard',
        lastCard && 'productItemCard-last',
      )}
    >
      <div className="productItemCard-image">
        <img
          src={picture.url}
          alt={title}
          width={picture.width}
          height={picture.height}
        />
      </div>
      <div className="productItemCard-data">
        <div className="productItemCard-price">
          <span className="productItemCard-price-value money">
            {ThousanSeparator(price.amount, '.')}
          </span>
          {freeShiping && (
            <img
              src="./assets/icons/ic_shipping.png"
              alt="Free shipping icon"
              className="productItemCard-price-shipping"
              width={16}
              height={16}
            />
          )}
        </div>

        <p className="productItemCard-description">{title}</p>
      </div>
      <p className="productItemCard-location">city</p>
    </Link>
  );
};

export default ProductItemCard;
