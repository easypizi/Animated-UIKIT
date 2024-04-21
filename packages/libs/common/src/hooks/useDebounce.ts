/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useMemoize } from './useMemoize';

export const useDebounce = <T = any>(data: T, delay = 500): T => {
  const [state, setState] = useState(data);

  const dataMemo = useMemoize(data);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(dataMemo);
    }, delay);

    return () => clearTimeout(timer);
  }, [dataMemo, delay]);

  return state;
};
