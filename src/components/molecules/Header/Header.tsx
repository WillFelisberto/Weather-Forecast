import clsx from 'clsx';
import React from 'react';

import { Button } from '@/components/atoms/Button';
interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={clsx(
        'text-white py-4 px-6 md:px-10 flex flex-wrap items-center justify-between',
        className
      )}
    >
      {/* Logo ou título */}
      <h1 className="text-xl md:text-2xl font-bold font-secondary flex-shrink-0 ">Dark Weather</h1>

      {/* Links de navegação */}
      <nav className=" hidden sm:block flex flex-wrap items-center justify-center space-x-6 md:space-x-8 text-center mb-4 md:mb-0">
        <a href="#" className="text-sm md:text-lg font-light hover:underline">
          Home
        </a>
        <a href="#" className="text-sm md:text-lg font-light hover:underline">
          Download App
        </a>
        <a href="#" className="text-sm md:text-lg font-light hover:underline">
          Contact us
        </a>
      </nav>

      {/* Botão de cadastro */}
      <div className="flex justify-center">
        <Button>Sign up</Button>
      </div>
    </header>
  );
};
