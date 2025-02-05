import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface SelectInputProps {
  options: string[];
  className?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({ options, className }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx('flex items-center space-x-4', className)}>
      <div className="relative">
        <button
          className="flex items-center justify-between w-48 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>{selectedOption}</span>
          <ChevronDown size={16} />
        </button>
        {isOpen && (
          <div className="absolute mt-2 w-full bg-gray-800 rounded-lg shadow-lg z-10">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-white hover:bg-gray-700 text-left w-full"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
