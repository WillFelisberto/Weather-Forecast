import clsx from 'clsx';
import React from 'react';

interface HeroTextProps {
  title: string;
  highlight: string;
  subtitle?: string;
  className?: string;
}

export const Hero: React.FC<HeroTextProps> = ({ title, highlight, subtitle, className }) => {
  return (
    <div className={clsx('text-center text-white', className)}>
      <h1 className="text-4xl md:text-5xl font-bold font-secondary leading-[65px]">
        {title}{' '}
        <span className="bg-gradient-to-r from-[#CAECFF] to-[#78CFFF] bg-clip-text text-transparent">
          {highlight}
        </span>
        !
      </h1>
      {subtitle && <p className="mt-4 text-lg md:text-xl font-light">{subtitle}</p>}
    </div>
  );
};
