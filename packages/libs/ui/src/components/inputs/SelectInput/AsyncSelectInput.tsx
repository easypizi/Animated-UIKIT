import { useCallback, type FC, type ReactNode, useMemo } from 'react';
import AsyncSelect, { type AsyncProps } from 'react-select/async';
import { Wrapper } from './styled';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AsyncSelectInputProps extends AsyncProps<any, false, any> {
  error?: boolean | ReactNode;
  noInput?: boolean;
  fixValue?: boolean;
}

export const AsyncSelectInput: FC<AsyncSelectInputProps> = (props) => {
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
      <AsyncSelect
        {...rest}
        value={fixedValue}
        options={options}
        onChange={fixValue ? onChangeValue : onChange}
        classNamePrefix="rselect"
      />
    </Wrapper>
  );
};
