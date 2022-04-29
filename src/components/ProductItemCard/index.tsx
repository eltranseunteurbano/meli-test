import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ProductItem } from '../../types/ProductItem';
import ThousanSeparator from '../../utils/thousandSeparator';

interface ProductItemCardProps extends ProductItem {
  lastCard?: boolean;
  isLoading?: boolean;
}

const ProductItemCard: React.FC<ProductItemCardProps> = (props) => {
  const {
    lastCard, isLoading = true,
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
      <div className={
        cn(
          'productItemCard-image',
          isLoading && 'productItemCard-image-skeleton skeleton-animation',
        )}
      >
        <img
          src={picture.url}
          alt={title}
          width={picture.width}
          height={picture.height}
        />
      </div>
      <div className="productItemCard-data">
        <div className={
          cn(
            'productItemCard-price',
            isLoading && 'productItemCard-price-skeleton skeleton-animation',
          )
        }
        >
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

        <p className={cn(
          'productItemCard-description',
          isLoading && 'productItemCard-description-skeleton skeleton-animation',
        )}
        >{title}
        </p>
      </div>
      <p className={cn(
        'productItemCard-location',
        isLoading && 'productItemCard-location-skeleton skeleton-animation',
      )}
      >
        Buenos aires
      </p>
    </Link>
  );
};

export default ProductItemCard;
