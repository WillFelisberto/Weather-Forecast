import React from 'react';

interface CustomIconProps {
  iconSVG: React.ReactElement; // O SVG completo para o tema claro
  size?: number; // Tamanho do ícone (em pixels)
}

export const CustomIcon: React.FC<CustomIconProps> = ({ iconSVG, size = 64 }) => {
  return (
    <div className="relative">
      {/* Ícone para tema claro */}
      {React.cloneElement(iconSVG as React.ReactElement<React.SVGProps<SVGSVGElement>>, {
        width: size,
        height: size
      })}
    </div>
  );
};
