import cn from 'classnames';
import ProductItem from "../../types/ProductItem";
import ProductItemCard from "../ProductItemCard";

interface ProductListProps {
  productList: ProductItem[];
  className?: string;
}

const ProductList: React.FC<ProductListProps> = (props) => {
  const { productList, className } = props;

  return (
    <article className={cn(className, 'ProductList')}>
      {productList.map((item, index) => <ProductItemCard
        key={item.id}
        lastCard={index === productList.length - 1}
        {...item}
      />)
      }
    </article>
  )
}

export default ProductList