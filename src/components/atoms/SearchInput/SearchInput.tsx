import clsx from 'clsx';
import { Loader2, Search } from 'lucide-react';
import { useState, KeyboardEvent } from 'react';

import { Button } from '../Button';

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  onSearchCallback(query: string): Promise<void>;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search here...',
  className,
  onSearchCallback
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (searchValue.trim()) {
      setIsSearching(true);
      try {
        await onSearchCallback(searchValue);
      } finally {
        setIsSearching(false);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={clsx(
          'flex-1 px-4 py-2 rounded-[12px] text-white bg-[--primary-color] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all',
          className
        )}
        disabled={isSearching}
      />
      <Button
        onClick={handleSearch}
        disabled={isSearching}
        className={clsx(
          'px-4 py-2  rounded-md text-white transition-colors bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500',
          { 'opacity-50 cursor-not-allowed': isSearching }
        )}
      >
        {isSearching ? (
          <Loader2 role="search-spin" className="animate-spin" size={20} />
        ) : (
          <Search role="search-icon" size={20} />
        )}
      </Button>
    </div>
  );
};
