import React from 'react';
import cn from 'classnames';

interface BreadcrumbProps {
  categories: string[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { categories, className } = props;
  return (
    <p className={cn(className, 'breadcrumb')}>
      {categories.map((category, index) => (
        <>
          <span key={category}>{category}</span>
          {index !== categories.length - 1 && <span> &gt; </span>}
        </>
      ))}
    </p>
  );
};

export default Breadcrumb;
