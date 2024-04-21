import { useCallback, type FC, type ReactNode, useMemo } from 'react';
import Select, { type Props } from 'react-select';
import { Wrapper } from './styled';

export interface SelectInputProps extends Props {
  error?: boolean | ReactNode;
  noInput?: boolean;
  fixValue?: boolean;
}

export const SelectInput: FC<SelectInputProps> = (props) => {
  // #TODO: show error
  const { error, noInput, fixValue, value, options, onChange, ...rest } = props;

  const onChangeValue = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (newValue: any, meta) => {
      onChange?.(newValue?.value ?? null, meta);
    },
    [onChange],
  );

  const fixedValue = useMemo(() => {
    if (!fixValue || value === undefined) {
      return value;
    }
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options?.find((x: any) => x.value === value) || {
        label: value,
        value,
      }
    );
  }, [options, value, fixValue]);

  return (
    <Wrapper noInput={noInput}>
      <Select
        {...rest}
        value={fixedValue}
        options={options}
        onChange={fixValue ? onChangeValue : onChange}
        classNamePrefix="rselect"
      />
    </Wrapper>
  );
};
