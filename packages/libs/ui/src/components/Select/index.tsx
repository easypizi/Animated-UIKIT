import {
  type FC,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import { CheckIcon, SmallCaretDownIcon } from '@easypizi/icons';
import {
  OptionsContainer,
  SelectButton,
  StyledSelect,
  Option,
  CheckedIconContainer,
  ButtonIconContainer,
  StyledOverlay,
  type StyledSelectProps,
  ErrorMessage,
  Title,
  Separator,
  SelectButtonText,
} from './styled';
import { useBreakpoint } from '../../hooks';
import type { ThemePaletteKey, ThemeTypographyKey } from '../../themes';
import { Stack } from '../Stack';

const OFFSET: number = 8;

export interface OptionType {
  value: string | number;
  label: string | number;
}

export interface SelectProps extends StyledSelectProps {
  options: OptionType[];
  defaultValue?: string | number | null;
  error?: string | boolean;
  withoutBackdrop?: boolean;
  placeHolder?: string;
  placeHolderTitle?: boolean;
  title?: string;
  titleVariant?: ThemeTypographyKey;
  titleColor?: ThemePaletteKey;
  titlePosition?: 'column' | 'row' | 'row-reverse';
  optionsVariant?: ThemeTypographyKey;
  fullWidth?: boolean;
  optionsMaxHeight?: string;
  withSeparator?: boolean;
  optionsPosition?: 'top' | 'bottom';
  renderOption?: (value: string | number) => ReactNode;
  renderTitle?: (label: string) => ReactNode;
  onValueChange?: (value: string | number) => void;
  onChange?: (value: string | number) => void;
}

export const Select: FC<SelectProps> = ({
  options,
  placeHolder,
  withoutBackdrop,
  defaultValue = '',
  title,
  titleVariant,
  titleColor,
  optionsVariant,
  renderTitle,
  withSeparator = false,
  titlePosition = 'column',
  optionsMaxHeight,
  renderOption,
  placeHolderTitle = false,
  fullWidth = false,
  noBorder = false,
  optionsPosition = 'bottom',
  error,
  onChange,
  onValueChange,
}) => {
  const isMobile = useBreakpoint('down', 'md');

  const [selectedValue, setSelectedValue] = useState<string | number | null>(
    defaultValue,
  );

  const [isOpen, setIsOpen] = useState(false);
  const [optionsStyles, setOptionsStyles] = useState({});

  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | HTMLDivElement | null>(null);
  const optionsContainerRef = useRef<HTMLDivElement | null>(null);

  const buttonView = useMemo(() => {
    const result = options.filter((item) => item.value === selectedValue);

    if (!result.length) {
      return placeHolder ?? '';
    }
    return placeHolder && placeHolderTitle
      ? `${placeHolder}: ${result[0].label}`
      : result[0].label;
  }, [options, placeHolder, placeHolderTitle, selectedValue]);

  const calculateDropdownStyles = useCallback(() => {
    if (!buttonRef.current || !optionsContainerRef.current) return;
    let newStyles = {
      top: 'unset',
      bottom: 'unset',
      right: 'unset',
    };
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const titleRect = titleRef.current?.getBoundingClientRect();
    const dropdownRect = optionsContainerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    const overflowRight = buttonRect.left + dropdownRect.width > viewportWidth;
    const overflowBottom =
      buttonRect.bottom + dropdownRect.height > viewportHeight;
    const titleHeight =
      titleRect?.height && titlePosition === 'column'
        ? titleRect.height + 8
        : 0;

    if (optionsPosition === 'bottom') {
      newStyles.top = `${buttonRect.height + titleHeight + OFFSET}px`;
    } else {
      newStyles.bottom = `${buttonRect.height + titleHeight + OFFSET}px`;
    }

    if (overflowRight) {
      newStyles = { ...newStyles, right: '0px' };
    }
    if (overflowBottom) {
      newStyles = { ...newStyles, top: `${-dropdownRect.height - OFFSET}px` };
    }

    setOptionsStyles(newStyles);
  }, [optionsPosition, titlePosition]);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);

    if (!isMobile) {
      setOptionsStyles({});
    }
  }, [isMobile]);

  const titleView = useMemo(() => {
    if (!title) {
      return null;
    }

    if (renderTitle) {
      return renderTitle(title);
    }

    return (
      <Title ref={titleRef} titleVariant={titleVariant} titleColor={titleColor}>
        {title}
      </Title>
    );
  }, [renderTitle, title, titleColor, titleVariant]);

  const getOptionView = useCallback(
    (label: string | number) => {
      if (renderOption) {
        return renderOption(label);
      }
      return label;
    },
    [renderOption],
  );

  const handleChange = useCallback(
    (value: string | number) => {
      setSelectedValue(value);
      closeDropdown();
      onChange?.(value);
      onValueChange?.(value);
    },
    [closeDropdown, onChange, onValueChange],
  );

  const handleClickOutside = useCallback(
    (event: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    },
    [closeDropdown],
  );

  const handleClick = useCallback(() => {
    setIsOpen((prevValue) => !prevValue);
  }, [setIsOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (isOpen && !isMobile) {
      setTimeout(calculateDropdownStyles, 0);
    }
  }, [calculateDropdownStyles, isMobile, isOpen]);

  useEffect(() => {
    if (defaultValue) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <StyledSelect
      ref={containerRef}
      opened={isOpen}
      noBorder={noBorder}
      fullWidth={fullWidth}
      optionsVariant={optionsVariant}
    >
      {!withoutBackdrop && isMobile && !error && (
        <StyledOverlay onClick={() => closeDropdown()} />
      )}
      <Stack
        gap={2}
        alignItems={titlePosition === 'column' ? 'flex-start' : 'center'}
        direction={titlePosition}
      >
        {titleView}
        <SelectButton
          ref={buttonRef}
          type="button"
          error={error}
          fullWidth={fullWidth}
          onClick={handleClick}
        >
          <SelectButtonText>{buttonView}</SelectButtonText>
          {withSeparator && <Separator />}
          <ButtonIconContainer>
            <SmallCaretDownIcon />
          </ButtonIconContainer>
        </SelectButton>
      </Stack>
      {isOpen && !error && (
        <OptionsContainer
          ref={optionsContainerRef}
          style={optionsStyles}
          withoutBackdrop={withoutBackdrop}
          height={optionsMaxHeight}
        >
          {options.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleChange(option.value)}
            >
              {getOptionView(option.label)}
              {option.value === selectedValue ? (
                <CheckedIconContainer>
                  <CheckIcon />
                </CheckedIconContainer>
              ) : null}
            </Option>
          ))}
        </OptionsContainer>
      )}
      {error && typeof error !== 'boolean' && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </StyledSelect>
  );
};
