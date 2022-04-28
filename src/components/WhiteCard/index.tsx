import React from 'react';
import cn from 'classnames';

interface WhiteCardprops {
  children: React.ReactNode,
  className?: string,
}

const WhiteCard: React.FC<WhiteCardprops> = (props) => {
  const { children, className } = props;

  return (
    <div className={cn(className, 'whiteCard')}>
      {children}
    </div>
  );
};

export default WhiteCard;
