import {
  useRef,
  useEffect,
  type FC,
  type ChangeEvent,
  type KeyboardEvent,
  type ClipboardEvent,
  type FocusEvent,
  useState,
  useCallback,
} from 'react';
import { Stack } from '../../Stack';
import { StyledInput, InputWrapper } from './styled';

export interface CellNumberInputProps {
  autoFocus?: boolean;
  disabled?: boolean;
  value?: string;
  name?: string;
  length?: number;
  placeholder?: string;
  onPasteAction?: () => void;
  onChange?: (value: string) => void;
}

export const CellNumberInput: FC<CellNumberInputProps> = ({
  autoFocus = true,
  disabled,
  length = 6,
  value = '',
  placeholder,
  onPasteAction,
  onChange,
  ...rest
}) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const initialValues = Array.from({ length }, (_, i) => value[i] || '');
  const [values, setValues] = useState<Array<string>>(initialValues);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [fullCode, setFullCode] = useState<string | null>();

  const sendResult = useCallback(() => {
    const res = inputsRef.current.map((input) => input.value).join('');
    onChange?.(res);

    if (res.length === length) {
      setFullCode(res);
    } else {
      setFullCode(null);
    }
  }, [length, onChange]);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const newValues = [...values];
      const inputVal = e.target.value;

      if (inputVal.length > 1) {
        newValues[index] = inputVal.charAt(0);
      } else if (inputVal.match('[0-9]{1}')) {
        newValues[index] = inputVal;
      } else {
        newValues[index] = '';
      }

      setValues(newValues);
      sendResult();

      if (inputVal.match('[0-9]{1}')) {
        const nextInputWrapper = e.target.parentElement
          ?.nextElementSibling as HTMLElement;
        const nextInput = nextInputWrapper?.querySelector('input');
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }
    },
    [sendResult, values],
  );

  const handleOnKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newValues = [...values];
      if (index > 0 && !e.currentTarget.value) {
        inputsRef.current[index - 1].focus();
        newValues[index - 1] = '';
        newValues[index] = '';
      } else {
        newValues[index] = '';
        inputsRef.current[index].focus();
      }
      setValues(newValues);
      sendResult();
    }
  };

  const handleOnBlur = useCallback(() => {
    setFocusedIndex(null);
  }, []);

  const handleOnFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
    const index = inputsRef.current.indexOf(e.target);
    setFocusedIndex(index);
  }, []);

  const handleOnPaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData('text')
        .split('')
        .filter((char) => char.match('[0-9]{1}'));

      const newValues = [...values];
      const pasteIndex = 0;

      pastedData.forEach((char, index) => {
        if (pasteIndex + index < length) {
          newValues[pasteIndex + index] = char;
          inputsRef.current[pasteIndex + index].value = char;
        }
      });

      setValues(newValues);
      sendResult();
    },
    [length, sendResult, values],
  );

  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
      setFocusedIndex(0);
    }
  }, [autoFocus]);

  useEffect(() => {
    if (focusedIndex) {
      inputsRef.current[focusedIndex].focus();
    }
  }, [focusedIndex]);

  useEffect(() => {
    if (fullCode) {
      onPasteAction?.();
    }
  }, [fullCode, onPasteAction]);

  const inputs = values.map((val, i) => (
    <InputWrapper focused={i === focusedIndex}>
      <StyledInput
        key={`code_${val}`}
        value={val}
        // eslint-disable-next-line no-return-assign
        ref={(el) => (inputsRef.current[i] = el!)}
        onChange={(event) => handleOnChange(event, i)}
        onKeyDown={(event) => handleOnKeyDown(event, i)}
        onFocus={handleOnFocus}
        onPaste={handleOnPaste}
        type="text"
        min="0"
        max="9"
        maxLength={1}
        autoComplete="off"
        disabled={disabled}
        placeholder={placeholder}
      />
    </InputWrapper>
  ));

  return (
    <Stack
      {...rest}
      onBlur={handleOnBlur}
      direction="row"
      gap={3}
      alignItems="center"
    >
      {inputs}
    </Stack>
  );
};
