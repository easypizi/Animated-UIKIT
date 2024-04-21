import {
  type ChangeEvent,
  type FC,
  type FocusEvent,
  type HTMLProps,
  useCallback,
  useRef,
  useState,
  useEffect,
} from 'react';
import {
  BaseInput,
  type BaseInputProps,
  splitBaseInputProps,
} from '../BaseInput';
import { StyledInput, type StyledInputProps } from './styled';

interface Props
  extends Omit<HTMLProps<HTMLInputElement | HTMLTextAreaElement>, 'label'>,
    StyledInputProps {
  autoHeight?: boolean;
  onChangeText?: (value: string) => void;
}

export interface TextInputProps
  extends Omit<BaseInputProps, 'focused' | 'children' | 'onClear'>,
    Props {}

export const TextInput: FC<TextInputProps> = (props) => {
  const { disabled } = props;

  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const [baseInputProps, inputProps] = splitBaseInputProps<Props>(props);

  const {
    value,
    multiline,
    autoHeight,
    onChange,
    onChangeText,
    onBlur,
    onFocus,
    ...inputRest
  } = inputProps;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(event);
      }
      if (onChangeText) {
        onChangeText(event.target.value);
      }
    },
    [onChange, onChangeText],
  );

  const onClear = useCallback(() => {
    if (inputRef.current) {
      const descriptor = Object.getOwnPropertyDescriptor(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-proto
        inputRef.current.__proto__,
        'value',
      );
      const event = new Event('input', { bubbles: true });
      descriptor?.set?.call(inputRef.current, '');
      inputRef.current.dispatchEvent(event);
    }
  }, []);

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(true);
      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur],
  );

  useEffect(() => {
    if (inputRef.current && multiline && autoHeight) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [multiline, autoHeight, value]);

  return (
    <BaseInput
      {...baseInputProps}
      focused={focused}
      onClear={onClear}
      empty={!value}
    >
      <StyledInput
        as={multiline ? 'textarea' : undefined}
        multiline={multiline}
        ref={inputRef as never}
        value={value}
        disabled={disabled}
        rows={1}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...(inputRest as Record<string, never>)}
      />
    </BaseInput>
  );
};
