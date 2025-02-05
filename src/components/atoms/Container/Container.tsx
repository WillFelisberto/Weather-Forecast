import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx('max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8', className)}>{children}</div>
  );
};
