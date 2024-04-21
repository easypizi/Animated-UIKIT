import { CalendarIcon, CloseIcon } from '@easypizi/icons';
import {
  type FC,
  type MouseEvent,
  type ReactNode,
  forwardRef,
  useCallback,
} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '../Button';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DateFilterButton = forwardRef<any, any>((props, ref) => {
  const { label, valuePrefix, value, onClick, onChange } = props;

  let content = value || label;

  if (value && valuePrefix) {
    content = `${valuePrefix} ${value}`;
  }

  const clear = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      if (onChange) {
        onChange({
          target: {
            value: '',
          },
        });
      }
    },
    [onChange],
  );

  return (
    <Button
      ref={ref}
      onClick={onClick}
      size="xs"
      color={value ? 'dark' : 'base'}
      startIcon={<CalendarIcon />}
      endIcon={value ? <CloseIcon onClick={clear} /> : null}
    >
      {content}
    </Button>
  );
});

export interface DateFilterInputProps {
  value?: string | null;
  label?: ReactNode;
  valuePrefix?: string;
  onChange?: (value: string) => void;
}

export const DateFilterInput: FC<DateFilterInputProps> = (props) => {
  const { value, label, valuePrefix, onChange } = props;

  return (
    <div>
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        customInput={
          <DateFilterButton label={label} valuePrefix={valuePrefix} />
        }
      />
    </div>
  );
};
