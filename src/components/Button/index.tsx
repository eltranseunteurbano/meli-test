import cn from 'classnames';

interface ButtonProps {
  children: React.ReactNode,
  onClick: () => void,
  type?: 'primary' | 'secondary';
  isFullwidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, type = 'primary', isFullwidth, onClick } = props;

  return (
    <button
      className={cn(
        className,
        "button",
        `button-${type}`,
        isFullwidth && 'button-fullwidth'
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button;