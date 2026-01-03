import React from 'react';
import { HiSearch, HiX } from 'react-icons/hi';
import { SearchWrapper, StyledInput, IconWrapper, ClearButton } from './styled';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onEnter,
  placeholder = '검색하기',
  className,
  autoFocus,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
  };

  return (
    <SearchWrapper className={className}>
      <StyledInput
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      {value && (
        <ClearButton onClick={handleClear} type="button">
          <HiX size={14} />
        </ClearButton>
      )}
      <IconWrapper>
        <HiSearch size={16} />
      </IconWrapper>
    </SearchWrapper>
  );
};
