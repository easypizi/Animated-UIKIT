import type { FC } from 'react';
import { SearchIcon } from '@easypizi/icons';
import { TextInput, type TextInputProps } from '../TextInput';
import { SearchWrapper } from './styled';

export interface SearchInputProps extends TextInputProps {}

export const SearchInput: FC<SearchInputProps> = ({
  placeholder = 'Search',
  allowClear = true,
  startIcon = <SearchIcon />,
  ...rest
}) => {
  return (
    <SearchWrapper>
      <TextInput
        allowClear={allowClear}
        placeholder={placeholder}
        startIcon={startIcon}
        {...rest}
      />
    </SearchWrapper>
  );
};
