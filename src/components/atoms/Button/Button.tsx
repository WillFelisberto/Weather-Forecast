import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-xl text-white font-medium transition-all',
        {
          'bg-gradient-to-r from-[#3A5E72] to-[#5C93B1] hover:opacity-80': variant === 'default',
          'bg-gradient-to-r from-[#4B7A90] to-[#6AA8C8] hover:opacity-80': variant === 'primary',
          'bg-gradient-to-r from-[#2D8659] to-[#4BBF87] hover:opacity-80': variant === 'success',
          'bg-gradient-to-r from-[#D0A24B] to-[#F2C977] hover:opacity-80': variant === 'warning',
          'bg-gradient-to-r from-[#A54242] to-[#E66464] hover:opacity-80': variant === 'danger'
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
