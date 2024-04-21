/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import isDeepEqual from 'fast-deep-equal/react';

export const useMemoize = <T = any>(data: T): T => {
  const dataRef = useRef<T>(data);

  if (!isDeepEqual(dataRef.current, data)) {
    dataRef.current = data;
  }

  return dataRef.current;
};
