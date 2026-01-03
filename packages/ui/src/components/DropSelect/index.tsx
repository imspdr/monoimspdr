import React, { useEffect, useMemo, useRef, useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { SearchInput } from '../SearchInput';
import {
  Container,
  Dropdown,
  NoResults,
  OptionItem,
  OptionsList,
  SearchBox,
  SelectButton,
} from './styled';

export interface Option {
  label: string;
  value: string;
}

export interface DropSelectProps {
  options: Option[];
  selected?: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  noResultsText?: string;
}

export const DropSelect: React.FC<DropSelectProps> = ({
  options,
  selected,
  onSelect,
  placeholder = '옵션을 골라주세요',
  searchable = false,
  searchPlaceholder = '검색하기',
  noResultsText = '검색 결과가 없습니다',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === selected),
    [options, selected],
  );

  const filteredOptions = useMemo(() => {
    if (!searchQuery) return options;
    return options.filter((opt) =>
      opt.label.normalize('NFC').toLowerCase().includes(searchQuery.normalize('NFC').toLowerCase()),
    );
  }, [options, searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <Container ref={containerRef}>
      <SelectButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        {isOpen ? <HiChevronUp /> : <HiChevronDown />}
      </SelectButton>

      {isOpen && (
        <Dropdown>
          {searchable && (
            <SearchBox onClick={(e) => e.stopPropagation()}>
              <SearchInput
                autoFocus
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </SearchBox>
          )}
          <OptionsList>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <OptionItem
                  key={option.value}
                  isSelected={option.value === selected}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </OptionItem>
              ))
            ) : (
              <NoResults>{noResultsText}</NoResults>
            )}
          </OptionsList>
        </Dropdown>
      )}
    </Container>
  );
};
